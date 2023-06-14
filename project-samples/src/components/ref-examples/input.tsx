import { useEffect, useRef } from "react";

const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return <input type="text" ref={inputRef} />;
};

export default Input;
