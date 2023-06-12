import { useState } from "react";

type User = {
    username: string;
    email: string;
    age: number;
};

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState<User | null>(null);

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUser({
            username: "mohammad",
            age: 25,
            email: "mohammad@gmail.com",
        });
    };

    return (
        <form>
            <input type="email" value={email} onChange={onEmailChange} />
            <input type="password" value={password} onChange={onPasswordChange} />

            <button onClick={onLogin}>Login</button>

            {user && (
                <div>
                    <h1>{user.username}</h1>
                    <h2>{user.age}</h2>
                </div>
            )}
        </form>
    );
};

export default LoginForm;
