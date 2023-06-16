import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Button = () => {
    const theme = useContext(ThemeContext);

    return (
        <button
            style={{
                backgroundColor: theme.primary.main,
                color: theme.primary.text,
            }}
        >
            Custom Button
        </button>
    );
};

export default Button;
