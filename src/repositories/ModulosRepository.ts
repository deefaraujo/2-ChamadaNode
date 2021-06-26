import { Repository, EntityRepository } from 'typeorm'
import { Modulo } from '../entities/Modulo' 


@EntityRepository(Modulo)
class ModulosRepository extends Repository<Modulo> {

}

export { ModulosRepository }