
import { getCustomRepository } from 'typeorm'
import { ModulosRepository } from '../repositories/ModulosRepository'

//interface do create
interface IModulosCreate {
    nomedomodulo: string;
}

//interface do show
interface IModulosShow {
    id: string
}

//interface do update
interface IModulosUpdate {
    id: string;
    nomedomodulo: string;
}

class ModulosServices {

    //CRIAR um registro de cliente
    async create({ nomedomodulo }: IModulosCreate) {
        const modulosRepository = getCustomRepository(ModulosRepository)
    
        const modulos = modulosRepository.create({
          nomedomodulo
        })
    
        await modulosRepository.save(modulos)
    
        return modulos;
    
      }

    async index() { //metodo index retorna todos os usuarios
        //utilizar esse comando para permitir o acesso ao repositorio para poder utilizar os metodos
        const modulosRepository = getCustomRepository(ModulosRepository) 

        //buscando todos os registros de dentro do banco de dados
        const modulos = await modulosRepository.find() 

        //retorna todos os clientes
        return modulos;
    }

    //LISTAR UM CLIENTE PELO ID
    async show({ id }: IModulosShow) { //metodo index retorna todos os usuarios
        //utilizar esse comando para permitir o acesso ao repositorio para poder utilizar os metodos
        const modulosRepository = getCustomRepository(ModulosRepository) 

        //buscando todos os registros de dentro do banco de dados
        const modulos = await modulosRepository.findOne({ id }) 

        //verificar se o id existe
      if (!modulos){
          throw new Error('ID do modulo não existe!!') //mostrar uma mensagem de erro
      }

        //retorna todos os clientes
        return modulos;
    }

    //DELETAR CLIENTE
    async delete({ id }: IModulosShow) {
        
        const modulosRepository = getCustomRepository(ModulosRepository) 


        const modulos = await modulosRepository.findOne({ id }) 
      
        if (!modulos){
          throw new Error('ID do modulo não existe!')
      }
      
      return await modulosRepository.delete({ id })

    }

    //ALTERAR CLIENTE
    async update({ id, nomedomodulo }: IModulosUpdate) {
        

        const modulosRepository = getCustomRepository(ModulosRepository)
        

        let modulos = await modulosRepository.findOne({ id })
    
        
        //SE NÃO ENCONTRAR O ID
        if (!modulos) {
          throw new Error('Id do modulo não existe!') //Mostrar uma mensagem de erro
        }

        await modulosRepository.update(
          id, {
            nomedomodulo
        })
        //Depois que foi alterado, vamos encontrar novamente o id para mostrar as informações alteradas
        modulos = await modulosRepository.findOne({ id })
    
        return modulos
    
      }
}

export { ModulosServices }
