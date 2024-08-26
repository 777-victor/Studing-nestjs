import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/projects/users/users.module';
import { TypeOrmConfig } from './modules/config/typeorm/typeorm.module';

@Module({
  imports: [ProjectsModule, UsersModule, TasksModule, TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
