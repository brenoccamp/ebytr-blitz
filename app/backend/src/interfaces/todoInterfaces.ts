import { Request, Response, NextFunction } from 'express';

export interface ITodo {
  id?: number;
  subject: string;
  description: string;
  status: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum Status {
  pending = 'pending',
  inProgress = 'in progress',
  done = 'done',
}

export enum SortBy {
  subject = 'subject',
  description = 'description',
  createdAt = 'created_at',
  status = 'status',
}

export enum PropertyToEdit {
  subject = 'subject',
  description = 'description',
  status = 'status',
}

export interface ITodoController {
  getAllTodos(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getTodosByStatus(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  insertNewTodo(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  updateTodo(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  deleteTodo(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}

export interface ITodoService {
  getAllTodos(): Promise<ITodo[]>;
  getSortedTodos(valueToSort: string): Promise<ITodo[]>;
  getTodosByStatus(status: string): Promise<ITodo[]>;
  insertNewTodo(newTodo: ITodo): Promise<ITodo>;
  updateTodo(id: number, propertyToEdit: string, newPropertyInfo: string): Promise<boolean | void>;
  deleteTodo(id: number): Promise<boolean | void>;
}
