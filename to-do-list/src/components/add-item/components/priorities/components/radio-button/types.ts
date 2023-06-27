import { Todo } from "../../../../../../context/types";

export type RadioButtonProps = {
    active: boolean;
    priority: Todo["priority"];
} & React.ComponentProps<"input">;
