import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne } from 'typeorm'

import { Usuario } from './Usuario'
import { Modulo } from './Modulo'


import { v4 as uuid } from 'uuid'

@Entity('modulosusuarios')
class ModulosUsuarios {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'id_do_usuario'})
  @ManyToOne(() => Usuario)
  usuarios: Usuario;

  @Column()
  id_do_usuario: string;

  @JoinColumn({ name: 'id_do_modulo'})
  @ManyToOne(() => Modulo)
  modulos: Modulo;

  @Column()
  id_do_modulo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { ModulosUsuarios }