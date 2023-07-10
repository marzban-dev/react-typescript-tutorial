import { createContext, useState } from "react";
import { Todo, TodoContextProviderProps, TodoContextType } from "./types";

export const TodoContext = createContext({} as TodoContextType);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [todos,setTodos] = useState<Todo[]>([]);

    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
