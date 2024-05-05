import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/mongoose/database.modules';
import { TodoModule } from './todo/todo.module';
import { MongooseModelModule } from './mongoose-model.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    TodoModule,
    MongooseModelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
