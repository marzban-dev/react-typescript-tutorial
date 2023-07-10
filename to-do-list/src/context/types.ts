export type Todo = {
    id: number;
    title: string;
    priority: 0 | 1 | 2 | 3;
    completed: boolean;
};

export type TodoContextProviderProps = {
    children: React.ReactNode;
};

export type TodoContextType = {
    todos: Todo[];
    setTodos: (todos : Todo[]) => void;
}; 
