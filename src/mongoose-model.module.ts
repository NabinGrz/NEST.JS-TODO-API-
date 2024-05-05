import { Global, Module } from '@nestjs/common';
import { TODOSchema, TODO_MODEL } from './todo/schema/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

const MODELS = [
  {
    name: TODO_MODEL,
    schema: TODOSchema,
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelModule {}
