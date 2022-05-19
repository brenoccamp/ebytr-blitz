import * as React from 'react';
import { ITodo, IProps } from '../../interfaces/ApplicationInterfaces';
import ApplicationContext from '../ApplicationContext';

const ApplicationProvider = ({ children }: IProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const contextValue = React.useMemo(() => ({
    todos,
    setTodos,
  }), [todos]);

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
