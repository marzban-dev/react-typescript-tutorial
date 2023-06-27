import { Todo } from "../../../../context/types";

export type PrioritiesProps = {
    priority : Todo["priority"];
    setPriority : (priority : Todo["priority"]) => void;
};
