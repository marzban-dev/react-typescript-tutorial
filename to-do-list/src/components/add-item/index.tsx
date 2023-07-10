import { useState, useContext } from "react";
import { createTodo, fetchTodos } from "../../api/todo";
import { Todo } from "../../context/types";
import Button from "./components/button";
import Input from "./components/input";
import Loading from "./components/loading";
import Priorities from "./components/priorities";
import { TodoContext } from "../../context/to-do-context";

const AddItem = () => {
    const [text, setText] = useState("");
    const [priority, setPriority] = useState<Todo["priority"]>(0);
    const [isLoading, setIsLoading] = useState(false);
    const { setTodos } = useContext(TodoContext);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addTodo = async () => {
        if (text.length !== 0) {
            setIsLoading(true);

            await createTodo({ title: text, priority });
            const todos = await fetchTodos();
            setTodos(todos);
            
            setIsLoading(false);

            setText("");
            setPriority(0);
        }
    };

    const containerStyle: React.CSSProperties = {
        width: "100%",
        border: "1px solid rgb(35,35,35)",
        marginTop: 40,
        padding: 10,
        borderRadius: 10,
    };

    return (
        <div style={containerStyle}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Priorities priority={priority} setPriority={setPriority} />
                <Loading show={isLoading} />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    height: 45,
                }}
            >
                <Input
                    value={text}
                    placeholder="Todo title"
                    onChange={onInputChange}
                    disabled={isLoading}
                />
                <Button onClick={addTodo} disabled={isLoading} />
            </div>
        </div>
    );
};

export default AddItem;
