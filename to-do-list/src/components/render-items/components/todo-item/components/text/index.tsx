import { TextProps } from "./types";

const Text = ({ children, completed }: TextProps) => {
    const textStyle: React.CSSProperties = {
        paddingLeft: 12,
        color: completed ? "rgb(150,150,150)" : "white",
        fontSize: 20,
        textDecoration: completed ? "line-through" : undefined,
    };

    return <div style={textStyle}>{children}</div>;
};

export default Text;
