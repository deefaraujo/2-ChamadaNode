import { Request, Response } from 'express'

import { ModulosUsuariosServices } from '../services/ModulosUsuariosServices'

class ModulosUsuariosController {

    //CRIAR UM NOVO MODULO POR USUARIO
    async create(request: Request, response: Response) {
        let { id_do_usuario, id_do_modulo } = request.body
        const modulosUsuariosServices = new ModulosUsuariosServices();
        try { 
            const modulosUsuarios = await modulosUsuariosServices.create({ id_do_usuario, id_do_modulo })
            return response.json(modulosUsuarios)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }
    //LISTAR TODAS AS MODULO POR USUARIO
    async index(request: Request, response: Response) {

        const modulosUsuariosServices = new ModulosUsuariosServices();

        try {
        
            const modulosUsuarios = await modulosUsuariosServices.index()
            return response.json(modulosUsuarios)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

        //LISTAR MODULO POR USUARIO PELO ID
    async show(request: Request, response: Response) {

        const modulosUsuariosServices = new ModulosUsuariosServices();

        const { id } = request.params


        try {
            const modulosUsuarios = await modulosUsuariosServices.show({ id })
            return response.json(modulosUsuarios) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //DELETAR UM MODULO POR USUARIO PELO ID
    async delete(request: Request, response: Response) {

        const modulosUsuariosServices = new ModulosUsuariosServices();

        const { id } = request.params


        try {
            await modulosUsuariosServices.delete({ id })
            return response.json({ message: 'Modulo de Usuario foi deletado com sucesso!'}) //tudo dando certo irá repassar pro "insomnia"
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //ALTERAR UM MODULO POR USUARIO
    async update(request: Request, response: Response) {

        const modulosUsuariosServices = new ModulosUsuariosServices();

        let { id_do_usuario, id_do_modulo  } = request.body 

        const { id } = request.params
        
        try { 
            const modulosUsuarios = await modulosUsuariosServices.update({ 
                id, id_do_usuario, id_do_modulo 
            })
            return response.json(modulosUsuarios)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }

}


export { ModulosUsuariosController }
