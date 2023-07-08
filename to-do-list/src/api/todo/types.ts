import { Todo } from "../../context/types";

export type FetchTodosResponse = Todo[];

export type CreateTodoRequestBody = Omit<Todo, "id" | "completed">;
