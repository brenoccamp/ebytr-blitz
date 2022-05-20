import * as React from 'react';
import { ITodo, IProps, INewTask } from '../../interfaces/ApplicationInterfaces';
import ApplicationContext from '../ApplicationContext';

const ApplicationProvider = ({ children }: IProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [newTodo, setNewTodo] = React.useState<INewTask>({});
  const [forceUpdate, setForceUpdate] = React.useState<boolean>(false);

  const contextValue = React.useMemo(() => ({
    todos,
    setTodos,
    loading,
    setLoading,
    newTodo,
    setNewTodo,
    forceUpdate,
    setForceUpdate,
  }), [todos, loading, newTodo, forceUpdate]);

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
