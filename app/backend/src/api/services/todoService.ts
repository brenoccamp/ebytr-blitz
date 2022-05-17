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

  private async getTodoById(id: number): Promise<ITodo> {
    const todoFound = await this._TodoModel.findByPk(id);

    return todoFound as ITodo;
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

  public async updateTodo(
    id: number,
    propertyToEdit: string,
    newPropertyInfo: string,
  ): Promise<boolean | void> {
    const todoFound = await this.getTodoById(id);
    if (!todoFound) return todoFound;

    await this._TodoModel.update({ [propertyToEdit]: newPropertyInfo }, {
      where: {
        id,
      },
    });

    return true;
  }

  public async deleteTodo(id: number): Promise<boolean | void> {
    const todoFound = await this.getTodoById(id);

    if (!todoFound) return todoFound;

    await this._TodoModel.destroy({
      where: { id },
    });

    return true;
  }
}
