import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TODO_MODEL, TodoDocument } from './schema/todo.schema';
import { Model } from 'mongoose';
import { CreateTODODto } from './dto/create-todo.dto';
import { UpdateTODODto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TODO_MODEL) private readonly todoModel: Model<TodoDocument>,
  ) {
    console.log(this.todoModel);
  }

  async create(createTodoDto: CreateTODODto) {
    try {
      const todo = await this.todoModel.create(createTodoDto);
      return todo;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const todos = await this.todoModel.find();
      return todos;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string) {
    const todo = await this.todoModel.findOne({ id: id });
    if (todo) {
      return todo;
    } else {
      throw new NotFoundException('TODO Not Found');
    }
  }

  async update(id: string, updateTodoDTO: UpdateTODODto) {
    const todo = await this.todoModel.findByIdAndUpdate(id, updateTodoDTO);
    if (todo) {
      return todo;
    } else {
      throw new NotFoundException('TODO Not Found');
    }
  }

  async delete(id: string) {
    const todo = await this.todoModel.findByIdAndDelete(id);
    if (todo) {
      return {
        id: todo._id,
      };
    } else {
      throw new NotFoundException('TODO Not Found');
    }
  }
}
