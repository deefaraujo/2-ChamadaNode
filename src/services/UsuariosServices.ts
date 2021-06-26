import { getCustomRepository } from 'typeorm'
import { UsuariosRepository } from '../repositories/UsuariosRepository'

//interface do create
interface IUsuariosCreate {
    filial: number;
    login: string;
    nomedousuario: string
}

//interface do show
interface IUsuariosShow {
    id: string
}

//interface do update
interface IUsuariosUpdate {
    id: string;
    filial: number;
    login: string;
    nomedousuario: string
}

class UsuariosServices {

    //CRIAR um registro de cliente
    async create({ filial, login, nomedousuario }: IUsuariosCreate) {


        const usuariosRepository = getCustomRepository(UsuariosRepository)

       
        const loginAlreadyExists = await usuariosRepository.findOne({ 
            login
        }) 

      if (loginAlreadyExists){
          throw new Error('Login já existe!!')
      }

        const usuarios = usuariosRepository.create({ 
            filial, 
            login, 
            nomedousuario
        })


        await usuariosRepository.save(usuarios)

        return usuarios;
    }

    async index() {
        
        const usuariosRepository = getCustomRepository(UsuariosRepository) 


        const usuarios = await usuariosRepository.find() 


        return usuarios;
    }

    //LISTAR UM CLIENTE PELO ID
    async show({ id }: IUsuariosShow) { 
      
        const usuariosRepository = getCustomRepository(UsuariosRepository) 


        const usuarios = await usuariosRepository.findOne({ id }) 


      if (!usuarios){
          throw new Error('Id do usuario não existe!!') //mostrar uma mensagem de erro
      }


        return usuarios;
    }

    //DELETAR CLIENTE
    async delete({ id }: IUsuariosShow) {
        
        const usuariosRepository = getCustomRepository(UsuariosRepository) 


        const usuarios = await usuariosRepository.findOne({ id }) 

      
        if (!usuarios){
          throw new Error('Id do usuario não existe!') 
      }
      
      return await usuariosRepository.delete({ id })

    }

    //ALTERAR CLIENTE
    async update({ id, filial, login, nomedousuario }: IUsuariosUpdate) {
        
        const usuariosRepository = getCustomRepository(UsuariosRepository)
        

        let usuarios = await usuariosRepository.findOne({ id })
    
        
    //SE NÃO ENCONTRAR O ID
        if (!usuarios) {
          throw new Error('Id do usuario não existe!') //Mostrar uma mensagem de erro
        }

        await usuariosRepository.update(
          id, {
            filial, 
            login, 
            nomedousuario
        })
       
        usuarios = await usuariosRepository.findOne({ id })
    
        return usuarios
    
      }

}

export { UsuariosServices }



