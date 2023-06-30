import { RestrictingExampleProps } from "./types";

const RestrictingExample = ({ children, icon, circle }: RestrictingExampleProps) => {
    return (
        <button style={{ borderRadius: circle ? 999 : 8 }}>
            <div>{icon}</div>
            {children}
        </button>
    );
};

<div>
    <RestrictingExample circle icon="icon.svg"/>
</div>

export default RestrictingExample;
