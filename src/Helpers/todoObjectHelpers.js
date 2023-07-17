import { v4 as uuidv4 } from "uuid";

export const generateTodoObject = (text) => {
  return {
    id: uuidv4(),
    text: text,
    createdAt: new Date(),
  };
};
