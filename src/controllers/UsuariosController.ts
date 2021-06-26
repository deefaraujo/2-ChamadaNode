import { Request, Response } from 'express'

import { UsuariosServices } from '../services/UsuariosServices'

class UsuariosController {

    //CRIAR UM NOVO CADASTRO DE CLIENTE
    async create(request: Request, response: Response) { 
        const { filial, login, nomedousuario } = request.body 
        
        const usuariosServices = new UsuariosServices();
        
        try { 
            const usuarios = await usuariosServices.create({ filial, login, nomedousuario })
            return response.json(usuarios)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message}) 
            }

    }
    //LISTAR TODOS OS CLIENTES
    async index(request: Request, response: Response) {

        const usuariosServices = new UsuariosServices()

        try {

            const usuarios = await usuariosServices.index()
            return response.json(usuarios)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

        //LISTAR CLIENTE PELO ID
    async show(request: Request, response: Response) { 

        const usuariosServices = new UsuariosServices()

        const { id } = request.params


        try {

            const usuarios = await usuariosServices.show({ id }) 
            return response.json(usuarios) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //DELETAR UM CLIENTE PELO ID
    async delete(request: Request, response: Response) { 

        const usuariosServices = new UsuariosServices()

        const { id } = request.params


        try {
            
            const usuarios = await usuariosServices.delete({ id }) 
            return response.json({ message: 'Usuario foi deletado com sucesso!'}) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //ALTERAR UM CLIENTE
    async update(request: Request, response: Response) {

        const usuariosServices = new UsuariosServices();
        

        const { filial, login, nomedousuario } = request.body 
        
        const { id } = request.params
        
        
        try { 
            const usuarios = await usuariosServices.update({ id, filial, login, nomedousuario })
            return response.json(usuarios)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }


}



export { UsuariosController }