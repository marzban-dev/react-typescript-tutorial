import CompleteButton from "./components/complete-button";
import DeleteButton from "./components/delete-button";
import Text from "./components/text";
import { TodoItemProps } from "./types";

const TodoItem = ({id,completed,priority,title }: TodoItemProps) => {
    const containerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgb(60,60,60)",
        padding: "20px 12px",
    };

    return (
        <div style={containerStyle} className="todo-item fadeIn">
            <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                <CompleteButton id={id} priority={priority} completed={completed} />
                <Text completed={completed}>{title}</Text>
            </div>
            <DeleteButton id={id} />
        </div>
    );
};

export default TodoItem;
