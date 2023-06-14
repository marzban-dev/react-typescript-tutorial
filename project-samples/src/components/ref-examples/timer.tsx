import { useEffect, useRef, useState } from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);
    const timer = useRef<NodeJS.Timer | null>(null);

    const stopTimer = () => {
       if(timer.current) clearInterval(timer.current);
    };
    
    useEffect(() => {
        timer.current = setInterval(() => {
            setCounter((oldValue) => oldValue + 1);
        }, 1000);
    
        return () => stopTimer();
    }, []);
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
};

export default Timer;
