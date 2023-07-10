import { useContext, useMemo, useEffect } from "react";
import { TodoContext } from "../../context/to-do-context";
import TodoItem from "./components/todo-item";
import { fetchTodos } from "../../api/todo";

const RenderItems = () => {
    const { todos, setTodos } = useContext(TodoContext);

    useEffect(() => {
        const getTodos = async () => {
            const todos = await fetchTodos();
            setTodos(todos);
        };
        getTodos();
    }, []);

    const sortTodos = (isCompleted: boolean) => {
        return todos
            .sort((a, b) => (a.id > b.id ? -1 : 1))
            .sort((a, b) => (a.priority > b.priority ? -1 : 1))
            .filter((item) => (isCompleted ? item.completed : !item.completed))
            .map((item) => {
                return <TodoItem {...item} key={item.id} />;
            });
    };

    const completedItems = useMemo(() => sortTodos(true), [todos, sortTodos]);

    const uncompletedItems = useMemo(() => sortTodos(false), [todos, sortTodos]);

    const completedItemsContainer: React.CSSProperties = {
        marginTop: 20,
        paddingTop: 20,
        borderTop: uncompletedItems.length !== 0 ? "6px dashed rgb(99, 99, 99)" : undefined,
    };

    return (
        <div style={{ width: "100%" }}>
            <div>{uncompletedItems}</div>

            {completedItems.length !== 0 && (
                <div style={completedItemsContainer}>{completedItems}</div>
            )}

            {completedItems.length === 0 && uncompletedItems.length === 0 && (
                <div style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
                    Todo list is empty
                </div>
            )}
        </div>
    );
};
export default RenderItems;
