import { Request, Response } from 'express'

import { ModulosServices } from '../services/ModulosServices'

class ModulosController {

    //CRIAR UM NOVO CADASTRO DE CLIENTE
    async create(request: Request, response: Response) {
        const { nomedomodulo } = request.body 
        
        const modulosServices = new ModulosServices();
        
        try { 
            const modulos = await modulosServices.create({ nomedomodulo })
            return response.json(modulos)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }
    //LISTAR TODOS OS CLIENTES
    async index(request: Request, response: Response) { 
        const modulosServices = new ModulosServices();

        try {
            
            const modulos = await modulosServices.index()
            return response.json(modulos)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //LISTAR CLIENTE PELO ID
    async show(request: Request, response: Response) { 
        const modulosServices = new ModulosServices();
        
        const { id } = request.params

        try {
            
            const modulos = await modulosServices.show({ id }) 
            return response.json(modulos)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //DELETAR UM CLIENTE PELO ID
    async delete(request: Request, response: Response) {
        const modulosServices = new ModulosServices();

        const { id } = request.params


        try {
            
            await modulosServices.delete({ id }) 
            return response.json({ message: 'Modulo foi deletado com sucesso!'}) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 

    //ALTERAR UM CLIENTE
    async update(request: Request, response: Response) { 

        const modulosServices = new ModulosServices();
        
        
        const { nomedomodulo } = request.body 
        
        const { id } = request.params
        
        try { 
            const modulos = await modulosServices.update({ id, nomedomodulo })
            return response.json(modulos)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }

}



export { ModulosController }