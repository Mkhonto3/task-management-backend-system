import { Task } from 'src/task/task.entity';
import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    password: string

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];
}