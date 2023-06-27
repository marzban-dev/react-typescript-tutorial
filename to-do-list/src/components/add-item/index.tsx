import { useContext, useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import { Todo } from "../../context/types";
import Priorities from "./components/priorities";
import { TodoContext } from "../../context/to-do-context";

const AddItem = () => {
    const { addTodoItem } = useContext(TodoContext);
    const [text, setText] = useState("");
    const [priority, setPriority] = useState<Todo["priority"]>(0);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addTodo = () => {
        if (text.length !== 0) {
            addTodoItem({ title: text, priority });
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
            <Priorities priority={priority} setPriority={setPriority} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    height: 45,
                }}
            >
                <Input value={text} placeholder="Todo title" onChange={onInputChange} />
                <Button onClick={addTodo} />
            </div>
        </div>
    );
};

export default AddItem;
