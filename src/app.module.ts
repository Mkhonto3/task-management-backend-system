import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'Mthobisi',
    database: 'task-management',
    entities: [User, Task],
    synchronize: true,
  }),UserModule, TaskModule, DashboardModule],
  controllers: [AppController, DashboardController],
  providers: [AppService, DashboardService],
})
export class AppModule {}
