import { ITodo, ITodoService } from '../../interfaces/todoInterfaces';
import Todo from '../../database/models/todoModel';

export default class TodoService implements ITodoService {
  private _TodoModel;

  constructor() {
    this._TodoModel = Todo;
  }

  public async getAllTodos(): Promise<ITodo[]> {
    const allTodos = await this._TodoModel.findAll();

    return allTodos;
  }

  public async getSortedTodos(valueToSort: string): Promise<ITodo[]> {
    const sortedTodos = await this._TodoModel.findAll({
      order: [valueToSort],
    });

    return sortedTodos;
  }

  public async getTodosByStatus(status: string): Promise<ITodo[]> {
    const todosByStatus = await this._TodoModel.findAll({
      where: { status },
    });

    return todosByStatus;
  }

  public async insertNewTodo(newTodo: ITodo): Promise<ITodo> {
    const createdTodo = await this._TodoModel.create({
      subject: newTodo.subject,
      description: newTodo.description,
      status: newTodo.status,
      userId: newTodo.userId,
    });

    return createdTodo;
  }
}
