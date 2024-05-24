import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from '@nestjs/passport';
import { Task } from './task.entity';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  createTask(@Body() taskData: Partial<Task>, @Req() req: any) {
    return this.taskService.createTask(taskData, req.user.userId);
  }

  @Get()
  getTasks(@Req() req: any) {
    return this.taskService.getTasks(req.user.userId);
  }

  // Add more endpoints as needed
}
