import * as React from 'react';
import ApplicationContext from '../context/ApplicationContext';
import { IAppContext } from '../interfaces/ApplicationInterfaces';
import { insertNewTodo } from '../services/requests';

export default function NewTodoForms() {
  const {
    newTodo,
    setNewTodo,
    forceUpdate,
    setForceUpdate,
  } = React.useContext(ApplicationContext) as IAppContext;

  const setTodoInfo = (target: HTMLInputElement): void => {
    const { value, name } = target;

    newTodo[name] = value;
    setNewTodo(newTodo);
  };

  const addNewTodo = async () => {
    const { subject, description, status } = newTodo;

    if (!subject || !description || !status) {
      alert('Todos os campos devem ser preenchidos.');
    } else {
      await insertNewTodo(newTodo);
    }
    setForceUpdate(!forceUpdate);
  };

  return (
    <div>
      <form>
        <label htmlFor="subject">
          Título
          <br />
          <input
            type="text"
            name="subject"
            maxLength={25}
            onChange={({ target }) => setTodoInfo(target)}
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <br />
          <input
            type="text"
            name="description"
            maxLength={100}
            onChange={({ target }) => setTodoInfo(target)}
          />
        </label>
        <br />
        Status
        <label htmlFor="pending" defaultValue="pending">
          <br />
          <input
            type="radio"
            id="pending"
            name="status"
            value="pending"
            onChange={({ target }) => setTodoInfo(target)}
          />
          Pendente
        </label>
        <label htmlFor="in progress">
          <input
            type="radio"
            id="in progress"
            name="status"
            value="in progress"
            onChange={({ target }) => setTodoInfo(target)}
          />
          Em Progresso
        </label>
        <label htmlFor="done">
          <input
            type="radio"
            id="done"
            name="status"
            value="done"
            onChange={({ target }) => setTodoInfo(target)}
          />
          Concluido
        </label>
      </form>
      <button
        type="submit"
        onClick={addNewTodo}
      >
        Adicionar Tarefa
      </button>
      <button
        type="button"
      >
        Ordenar por
      </button>
    </div>
  );
}
