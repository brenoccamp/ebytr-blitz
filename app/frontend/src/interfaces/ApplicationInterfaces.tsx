import * as React from 'react';

export interface ITodo {
  id: number;
  subject: string;
  description: string;
  status: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface INewTask {
  [key: string]: string;
}

export interface IOnChange extends EventTarget {
  id?: string;
}

export interface IAppContext {
  todos: ITodo[];
  setTodos(todos: ITodo[]): void;
  loading: boolean;
  setLoading(loading: boolean): void;
  newTodo: INewTask;
  setNewTodo(newTodo: INewTask): void;
  forceUpdate: boolean;
  setForceUpdate(forceUpdate: boolean): void;
}

export interface IProps {
  children?: React.ReactNode;
}
