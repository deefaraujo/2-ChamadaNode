import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('usuarios')
class Usuario {

  @PrimaryColumn()
  id: string;

  @Column()
  filial: number;

  @Column()
  login: string;

  @Column()
  nomedousuario: string;

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

export { Usuario }