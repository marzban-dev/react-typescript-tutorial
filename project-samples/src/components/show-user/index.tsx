import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ShowUser = () => {
    const userContext = useContext(UserContext);

    const login = () => {
        userContext.setUser({
            email: "mohammad@gmail.com",
            username: "mohammad",
        });
    };

    const logout = () => {
        userContext.setUser(null);
    };

    return (
        <div>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>

            {userContext.user === null && <h2>Please login</h2>}

            {userContext.user && (
                <div>
                    <p>Username is : {userContext.user.username}</p>
                    <p>Email is : {userContext.user.email}</p>
                </div>
            )}
        </div>
    );
};

export default ShowUser;
