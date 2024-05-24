import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

  createTask(taskData: Partial<Task>, userId: number): Promise<Task> {
    const task = this.taskRepository.create({ ...taskData, user: { id: userId } });
    return this.taskRepository.save(task);
  }

  getTasks(userId: number): Promise<Task[]> {
    return this.taskRepository.find({ where: { user: { id: userId } } });
  }

  // Add more CRUD methods as needed
}
