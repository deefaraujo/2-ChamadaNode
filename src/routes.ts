import { Router } from 'express'

//Já que a rota tem que chamar o controller então aqui vamos chamar através do import 
//e definindo o endereço onde ele está
import { UsuariosController } from './controllers/UsuariosController'
import { ModulosController } from './controllers/ModulosController'
import { ModulosUsuariosController } from './controllers/ModulosUsuariosController'

const routes = Router();

//para acessar os metodos tem que instanciar o controller
//criando uma variavel para instanciar o controller
const usuariosController = new UsuariosController();
const modulosController = new ModulosController();
const modulesusersController = new ModulosUsuariosController();

// para chamar o metodo do controller para os usuarios
routes.post('/usuarios', usuariosController.create)
routes.get('/usuarios', usuariosController.index)
routes.get('/usuarios/:id', usuariosController.show)
routes.delete('/usuarios/:id', usuariosController.delete)
routes.put('/usuarios/:id', usuariosController.update)

//para chamar o metodo do controller para os modulos
routes.post('/modulos', modulosController.create)
routes.get('/modulos', modulosController.index)
routes.get('/modulos/:id', modulosController.show)
routes.delete('/modulos/:id', modulosController.delete)
routes.put('/modulos/:id', modulosController.update)

//para chamar os metodos do controller para os modulos por usuarios
routes.post('/modulesusers', modulesusersController.create)
routes.get('/modulesusers', modulesusersController.index)
routes.get('/modulesusers/:id', modulesusersController.show)
routes.delete('/modulesusers/:id', modulesusersController.delete)
routes.put('/modulesusers/:id', modulesusersController.update)

export { routes }

