import axios from "axios";
import { CreateTodoRequestBody, FetchTodosResponse } from "./types";

export const fetchTodos = async () => {
    const response = await axios.get<FetchTodosResponse>("http://localhost:3000/todo");
    return response.data;
};

export const createTodo = async (data: CreateTodoRequestBody) => {
    await axios.post("http://localhost:3000/todo", data);
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:3000/todo/${id}`);
};

export const completeTodo = async (id: number) => {
    await axios.post(`http://localhost:3000/todo/complete/${id}`);
};
