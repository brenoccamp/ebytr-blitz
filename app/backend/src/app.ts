import * as express from 'express';
import TodoController from './api/controllers/todoController';
import TodoService from './api/services/todoService';
import { ITodoController, ITodoService } from './interfaces/todoInterfaces';
import ErrorMiddleware from './api/middlewares/error';

class App {
  public app: express.Express;

  private _todoController: ITodoController;

  private _todoService: ITodoService;

  constructor() {
    this._todoService = new TodoService();
    this._todoController = new TodoController(this._todoService);

    this.app = express();
    this.app.use(express.json());

    this.startConfigs();
  }

  private startConfigs(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.todoRoutes();

    this.app.use(ErrorMiddleware);
  }

  private todoRoutes(): void {
    this.app.get(
      '/todos',
      this._todoController.getAllTodos,
    );

    this.app.get(
      '/todos/:status',
      this._todoController.getTodosByStatus,
    );

    this.app.post(
      '/todos',
      this._todoController.insertNewTodo,
    );

    this.app.patch(
      '/todos/:id',
      /* todos controller */
    );

    this.app.delete(
      '/todos/:id',
      /* todos controller */
    );
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
