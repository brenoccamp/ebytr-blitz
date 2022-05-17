import { Response, Request, NextFunction } from 'express';
import {
  ITodoService,
  ITodoController,
  SortBy,
  Status,
  ITodo,
} from '../../interfaces/todoInterfaces';

export default class TodoController implements ITodoController {
  constructor(
    private userService: ITodoService,
  ) { }

  getAllTodos = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const isToSort = req.query.sortBy as string;
      const valueToSort = SortBy[isToSort as keyof typeof SortBy];

      if (valueToSort) {
        const sortedTodos = await this.userService.getSortedTodos(valueToSort);

        return res.status(200).json(sortedTodos);
      }

      const allTodos = await this.userService.getAllTodos();

      return res.status(200).json(allTodos);
    } catch (error) {
      next(error);
    }
  };

  getTodosByStatus = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { status } = req.params;
      const selectedStatus = Status[status as keyof typeof Status];

      const todosByStatus = await this.userService.getTodosByStatus(selectedStatus);

      return res.status(200).json(todosByStatus);
    } catch (error) {
      next(error);
    }
  };

  insertNewTodo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const newTodo: ITodo = req.body;

      const insertedTodo = await this.userService.insertNewTodo(newTodo);

      return res.status(201).json(insertedTodo);
    } catch (error) {
      next(error);
    }
  };
}
