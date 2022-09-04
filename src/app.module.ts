import { Module } from "@nestjs/common";
import { TypeOrmCoreModule } from "@nestjs/typeorm/dist/typeorm-core.module";
import { typeormOptions } from "./config/config";
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TasksModule,TypeOrmCoreModule.forRoot(typeormOptions), AuthModule,]
})
export class AppModule {
}
