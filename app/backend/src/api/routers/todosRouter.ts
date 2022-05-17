import { Router } from 'express';
import TodoController from '../controllers/todoController';
import TodoService from '../services/todoService';

const todosRouter = Router();

const todoService = new TodoService();
const todoController = new TodoController(todoService);

todosRouter.get(
  '/',
  todoController.getAllTodos,
);

todosRouter.get(
  '/:status',
  todoController.getTodosByStatus,
);

todosRouter.post(
  '/',
  todoController.insertNewTodo,
);

todosRouter.patch(
  '/:id',
  todoController.updateTodo,
);

todosRouter.delete(
  '/:id',
  todoController.deleteTodo,
);

export default todosRouter;
