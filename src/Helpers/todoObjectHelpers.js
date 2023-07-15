import { v4 as uuidv4 } from "uuid";
import { formatDate } from "Helpers/dateFormatehelpers";

export const generateTodoObject = (text) => {
    return {
        id: uuidv4(),
        text: text,
        createdAt: formatDate(),
    };
};