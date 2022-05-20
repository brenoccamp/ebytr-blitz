import * as React from 'react';
import { Trash, Pen } from 'phosphor-react';
import { getAllTodos } from '../services/requests';
import { IAppContext } from '../interfaces/ApplicationInterfaces';
import ApplicationContext from '../context/ApplicationContext';

export default function TodoTable() {
  const {
    todos,
    setTodos,
    loading,
    setLoading,
    forceUpdate,
  } = React.useContext(ApplicationContext) as IAppContext;

  const getTodos = async () => {
    const { data, status } = await getAllTodos();
    if (status === 200) {
      setTodos(data);
      setLoading(false);
    }
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
          <Trash
            id={`${todo.id}`}
            size={15}
            color="red"
            onClick={(e) => console.log(e.target)}
          />
          <Pen
            id={`${todo.id}`}
            size={15}
            color="red"
          />
        </div>
      ))}
    </main>
  );
}
