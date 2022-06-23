import { v4 as uuidv4 } from 'uuid';

export const getEmptyTask = () => {
  const newTask = {
    id: uuidv4(),
    content: null,
    done: false,
  };
  return newTask;
};
