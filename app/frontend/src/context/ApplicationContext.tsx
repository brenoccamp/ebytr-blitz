import * as React from 'react';
import { IAppContext } from '../interfaces/ApplicationInterfaces';

const ApplicationContext = React.createContext<IAppContext | null>(null);

export default ApplicationContext;
