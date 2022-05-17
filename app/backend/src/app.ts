import * as express from 'express';
import todosRouter from './api/routers/todosRouter';
import ErrorMiddleware from './api/middlewares/error';

class App {
  public app: express.Express;

  constructor() {
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
    this.app.use('/todos', todosRouter);

    this.app.use(ErrorMiddleware);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
