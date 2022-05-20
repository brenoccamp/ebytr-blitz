import axios from 'axios';
import { INewTask } from '../interfaces/ApplicationInterfaces';

const API_BASE_URL = 'http://localhost:3001';

export const getAllTodos = async () => axios.get(`${API_BASE_URL}/todos`);

export const insertNewTodo = async (newTask: INewTask) => {
  const reqInfo = {
    url: `${API_BASE_URL}/todos`,
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-type': 'application/json;charset=UTF-8' },
    data: newTask,
  };

  await axios(reqInfo);
};
