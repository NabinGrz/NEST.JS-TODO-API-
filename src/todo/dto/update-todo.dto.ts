import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateTODODto } from './create-todo.dto';

export class UpdateTODODto extends PartialType(OmitType(CreateTODODto, [])) {}
