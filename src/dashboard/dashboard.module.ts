import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Task } from '../task/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}
