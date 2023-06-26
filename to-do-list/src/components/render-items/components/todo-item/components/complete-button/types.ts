import { Todo } from "../../../../../../context/types";

export type CompleteButtonProps = {
    id: number;
    priority: Todo["priority"];
    completed: boolean;
};
