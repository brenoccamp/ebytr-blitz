import * as React from 'react';
import { TrashSimple, Pen } from 'phosphor-react';
import { getAllTodos, deleteById } from '../services/requests';
import { IAppContext, IOnChange } from '../interfaces/ApplicationInterfaces';
import ApplicationContext from '../context/ApplicationContext';

export default function TodoTable() {
  const {
    todos,
    setTodos,
    loading,
    setLoading,
    forceUpdate,
    setForceUpdate,
  } = React.useContext(ApplicationContext) as IAppContext;

  const getTodos = async () => {
    const { data, status } = await getAllTodos();
    if (status === 200) {
      setTodos(data);
      setLoading(false);
    }
  };

  const deleteTodo = async (target: IOnChange) => {
    const id = Number(target.id);

    await deleteById(id);
    setForceUpdate(!forceUpdate);
  };

  React.useEffect(() => {
    getTodos();
  }, [forceUpdate]);

  if (loading) return <div>Carregando Tarefas...</div>;

  return (
    <main>
      {todos.map((todo) => (
        <div key={todo.id} id={`${todo.id}`}>
          <ul>
            <li>{todo.subject}</li>
            <li>{todo.description}</li>
            <li>
              Data de criação: &nbsp;
              {`${new Date(todo.createdAt).toLocaleDateString(
                'pt-BR',
                {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                },
              )}`}
            </li>
            <li>
              Última atualização: &nbsp;
              {`${new Date(todo.updatedAt).toLocaleDateString(
                'pt-BR',
                {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                },
              )}`}
            </li>
            <li>{todo.status}</li>
          </ul>
          <button
            type="button"
            id={`${todo.id}`}
            onClick={(e) => deleteTodo(e.target)}
          >
            <TrashSimple
              id={`${todo.id}`}
              size={15}
              color="red"
              // onClick={(e: React.MouseEvent<Element>) => deleteTodo(e)}
            />
          </button>
          <button
            type="button"
          >
            <Pen
              id={`${todo.id}`}
              size={15}
              color="red"
            />
          </button>
        </div>
      ))}
    </main>
  );
}
