import { ButtonProps } from "./types";

const Button = ({ onClick }: ButtonProps) => {
    const buttonStyle: React.CSSProperties = {
        width: 80,
        height: "100%",
        borderRadius: 10,
        border: "none",
        outline: "none",
        backgroundColor: "rgb(52, 144, 104)",
        color: "white",
        fontSize: 18,
        cursor: "pointer",
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            Add
        </button>
    );
};

export default Button;
