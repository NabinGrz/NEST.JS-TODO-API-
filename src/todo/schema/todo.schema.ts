import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Todo {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
    maxlength: 250,
  })
  description: string;

  @Prop({
    default: false,
    type: Boolean,
  })
  completed: boolean;
}

export const TODO_MODEL = Todo.name;
export const TODOSchema = SchemaFactory.createForClass(Todo);
export type TodoDocument = Todo & Document;
