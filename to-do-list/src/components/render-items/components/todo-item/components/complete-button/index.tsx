import { useContext } from "react";
import { CompleteButtonProps } from "./types";
import { TodoContext } from "../../../../../../context/to-do-context";
import { completeTodo as completeTodoApi, fetchTodos } from "../../../../../../api/todo";

const CompleteButton = ({ id, priority, completed }: CompleteButtonProps) => {
    const { setTodos } = useContext(TodoContext);

    const completeTodo = async () => {
        await completeTodoApi(id)
        const todos = await fetchTodos();
        setTodos(todos);
    };

    const todoColors = [
        "rgb(124, 124, 124)",
        "rgb(51, 116, 222)",
        "rgb(219, 111, 39)",
        "rgb(224, 60, 60)",
    ];

    const buttonStyle: React.CSSProperties = {
        width: 35,
        height: 35,
        borderRadius: 9999,
        border: "2px solid",
        borderColor: todoColors[priority],
        backgroundColor: "rgb(30,30,30)",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const iconStyle: React.CSSProperties = {
        fill: "rgb(55, 208, 160)",
        height: 18,
        marginTop: 1,
    };


    return (
        <button onClick={completeTodo} style={buttonStyle}>
            {completed && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={iconStyle}>
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
            )}
        </button>
    );
};

export default CompleteButton;
