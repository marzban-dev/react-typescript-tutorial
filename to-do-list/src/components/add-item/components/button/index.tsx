import { ButtonProps } from "./types";

const Button = ({ onClick, disabled }: ButtonProps) => {
    const buttonStyle: React.CSSProperties = {
        width: 80,
        height: "100%",
        borderRadius: 10,
        border: "none",
        outline: "none",
        backgroundColor: "rgb(52, 144, 104)",
        filter: disabled ? "grayscale(1)" : "none",
        color: "white",
        fontSize: 18,
        cursor: "pointer",
        transition: "filter 0.15s",
    };

    return (
        <button style={buttonStyle} onClick={onClick} disabled={disabled}>
            Add
        </button>
    );
};

export default Button;
