import { Response, Request, NextFunction } from 'express';
import {
  ITodoService,
  ITodoController,
  SortBy,
  Status,
  ITodo,
  PropertyToEdit,
} from '../../interfaces/todoInterfaces';

export default class TodoController implements ITodoController {
  constructor(
    private _userService: ITodoService,
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
        const sortedTodos = await this._userService.getSortedTodos(valueToSort);

        return res.status(200).json(sortedTodos);
      }

      const allTodos = await this._userService.getAllTodos();

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

      const todosByStatus = await this._userService.getTodosByStatus(selectedStatus);

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

      if (!newTodo.subject || !newTodo.description || !newTodo.status || !newTodo.userId) {
        return res.status(400)
          .json({
            message: `Body must have followed properties: "subject",
              "description", "status" and "user id"`,
          });
      }

      const insertedTodo = await this._userService.insertNewTodo(newTodo);

      return res.status(201).json(insertedTodo);
    } catch (error) {
      next(error);
    }
  };

  updateTodo = async (req: Request, res: Response, next: NextFunction):Promise<Response | void> => {
    try {
      const id = Number(req.params.id);
      const { newPropertyInfo } = req.body;
      const { todoProperty } = req.query;
      const propertyToEdit = PropertyToEdit[todoProperty as keyof typeof PropertyToEdit];

      if (!newPropertyInfo) {
        return res.status(400).json({ message: 'Body must contain a property "newPropertyInfo"' });
      }

      if (!todoProperty) {
        return res.status(400).json({ message: 'Query must contain a property "todoProperty"' });
      }

      const updatedTodo = await this._userService.updateTodo(id, propertyToEdit, newPropertyInfo);

      if (!updatedTodo) return res.status(404).json({ message: 'Task not found' });

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };

  deleteTodo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const id = Number(req.params.id);

      const deletedTodo = await this._userService.deleteTodo(id);

      if (!deletedTodo) return res.status(404).json({ message: 'Task not found.' });

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
}
