
import { getCustomRepository } from 'typeorm'
import { ModulosUsuariosRepository } from '../repositories/ModulosUsuariosRepository'

interface IModulosUsuariosCreate {
    id_do_usuario: string;
    id_do_modulo: string;
}

//interface do show
interface IModulosUsuariosShow {
    id: string
}

//interface do update
interface IModulosUsuariosUpdate {
    id: string;
    id_do_usuario: string;
    id_do_modulo: string;
}
class ModulosUsuariosServices {
    async create({ id_do_usuario, id_do_modulo }: IModulosUsuariosCreate) {


        const modulosUsuariosRepository = getCustomRepository(ModulosUsuariosRepository)
        const moduloUsuarios = modulosUsuariosRepository.create({ 
            id_do_usuario, 
            id_do_modulo
        })


        await modulosUsuariosRepository.save(moduloUsuarios)

        return moduloUsuarios;
    }

    async index() { 
        const modulosUsuariosRepository = getCustomRepository(ModulosUsuariosRepository) 


        const moduloUsuarios = await modulosUsuariosRepository.find({

            relations: ['usuarios','modulos']
        }) 


        return moduloUsuarios;
    }

    //LISTAR UMA ORDEM DE SERVIÇO PELO ID
    async show({ id }: IModulosUsuariosShow) { 
        const modulosUsuariosRepository = getCustomRepository(ModulosUsuariosRepository) 


        const moduloUsuarios = await modulosUsuariosRepository.findOne( id, 
            { relations: ['usuarios','modulos']}) 


      if (!moduloUsuarios){
          throw new Error('ID do modulo por usuario não existe!!') 
      }

    
        return moduloUsuarios;
    }

    //DELETAR UMA ORDEM DE SERVIÇO
    async delete({ id }: IModulosUsuariosShow) { 

        const modulosUsuariosRepository = getCustomRepository(ModulosUsuariosRepository) 

        const moduloUsuarios = await modulosUsuariosRepository.findOne({ id }) 

      
        if (!moduloUsuarios){
          throw new Error('ID do modulo por usuario não existe!') 
      }
      
      return await modulosUsuariosRepository.delete({ id })
    }

    //ALTERAR UMA ORDEM DE SERVIÇO
    async update({ id, id_do_usuario, id_do_modulo }: IModulosUsuariosUpdate) {
        
        
        const modulosUsuariosRepository = getCustomRepository(ModulosUsuariosRepository)
        
        let moduloUsuarios = await modulosUsuariosRepository.findOne({ id })
    
        
        if (!moduloUsuarios) {
          throw new Error('Id do modulo por usuario não existe!') //Mostrar uma mensagem de erro
        }

        await modulosUsuariosRepository.update(
          id, {
            id_do_usuario, 
            id_do_modulo
        })
        
        moduloUsuarios = await modulosUsuariosRepository.findOne({ id })
    
        return moduloUsuarios
    
      }
}

export { ModulosUsuariosServices }