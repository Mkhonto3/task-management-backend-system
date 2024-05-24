import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task/task.entity';

@Injectable()
export class DashboardService {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

  async getDashboard(userId: number) {
    const tasks = await this.taskRepository.find({ where: { user: { id: userId } } });
    const overdueTasks = tasks.filter(task => new Date(task.dueDate) < new Date());
    return {
      tasks,
      overdueTaskCount: overdueTasks.length,
      outstandingTaskCount: tasks.filter(task => task.status !== 'Completed').length,
    };
  }
}
