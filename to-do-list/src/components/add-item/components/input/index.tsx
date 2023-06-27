import { InputProps } from "./types";

const Input = (props : InputProps) => {
    const inputStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        border: "1px solid rgb(40,40,40)",
        borderRadius: 10,
        color: "white",
        padding: "0 16px",
        backgroundColor: "rgb(30,30,30)",
        outline: "none",
        fontSize: 16,
    };

    return <input {...props} type="text" style={inputStyle} />;
};

export default Input;
