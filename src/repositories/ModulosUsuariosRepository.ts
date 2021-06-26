import { Repository, EntityRepository } from 'typeorm'
import { ModulosUsuarios } from '../entities/ModulosUsuarios' 


@EntityRepository(ModulosUsuarios)
class ModulosUsuariosRepository extends Repository<ModulosUsuarios> { 

}

export { ModulosUsuariosRepository }
