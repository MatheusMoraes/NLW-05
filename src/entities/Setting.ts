import {Entity,Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
//criação da entidade
@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;
  
  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  //sempre executado após o new
  constructor() {
    //verifica se tem o id para atribuir o uuid
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export  { Setting }