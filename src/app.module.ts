import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PeticionesController } from './peticiones/peticiones.controller';
import { NuevoController } from './nuevo/nuevo.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
  controllers: [PeticionesController, NuevoController],
})
export class AppModule {}
