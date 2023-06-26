import { TodoContext } from "../../../../../../context/to-do-context";
import { DeleteButtonProps } from "./types";
import { useContext } from "react";

const DeleteButton = ({ id }: DeleteButtonProps) => {
    const { removeTodoItem } = useContext(TodoContext);

    const removeItem = () => {
        removeTodoItem(id);
    };

    const buttonStyle: React.CSSProperties = {
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const iconStyle: React.CSSProperties = {
        fill: "rgb(220, 82, 70)",
        height: 26,
    };

    return (
        <button onClick={removeItem} style={buttonStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={iconStyle}>
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
        </button>
    );
};

export default DeleteButton;
