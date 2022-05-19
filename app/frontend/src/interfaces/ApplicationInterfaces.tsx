import * as React from 'react';

export interface ITodo {
  id?: number;
  subject: string;
  description: string;
  status: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAppContext {
  todos: ITodo[];
  setTodos(todos: ITodo[]): void;
}

export interface IProps {
  children?: React.ReactNode;
}

// export interface IAppContext {
//   todos: ITodo[];
//   // setTodos: (todos: ITodo[]) => Promise<void>;
//   getAllTodos: () => Promise<ITodo[]>;
//   getSortedTodos: (valueToSort: string) => Promise<ITodo[]>;
//   getTodosByStatus: (status: string) => Promise<ITodo[]>;
//   insertNewTodo: (newTodo: ITodo) => Promise<ITodo>;
//   updateTodo: (id:number, propertyToEdit:string, newPropertyInfo:string) => Promise<boolean | void>;
//   deleteTodo: (id: number) => Promise<boolean | void>;
// }
