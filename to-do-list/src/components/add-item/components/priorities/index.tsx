import { Todo } from "../../../../context/types";
import RadioButton from "./components/radio-button";
import { PrioritiesProps } from "./types";

const Priorities = ({ priority, setPriority }: PrioritiesProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(Number(e.target.value) as Todo["priority"]);
    };

    const containerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 16,
        padding: "10px 16px",
    };

    return (
        <div style={containerStyle}>
            <RadioButton onChange={onChange} priority={0} active={priority === 0} value={0} />
            <RadioButton onChange={onChange} priority={1} active={priority === 1} value={1} />
            <RadioButton onChange={onChange} priority={2} active={priority === 2} value={2} />
            <RadioButton onChange={onChange} priority={3} active={priority === 3} value={3} />
        </div>
    );
};

export default Priorities;
