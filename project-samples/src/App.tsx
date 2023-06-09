import "./App.css";
import ApiExample from "./components/api-example";
import Button from "./components/button";
import CustomInput from "./components/custom-input";
import Generics from "./components/generics";
import RestrictingExample from "./components/restricting-example";
import ShoppingCart from "./components/shoping-cart";
import ShowUser from "./components/show-user";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value;
    };

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.target;
    };

    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        event.key;
    };

    return (
        <>
            {/* <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={onChangeHandler} />
                <button onClick={onClickHandler} onKeyDown={onKeyDownHandler}>
                    Click Me
                </button>

                <CustomInput
                    onChange={(e) => {
                        e.target.value;
                    }}
                    value=""
                />
            </form> */}

            {/* <ThemeContextProvider>
                <Button />
            </ThemeContextProvider> */}

            {/* <UserContextProvider>
                <ShowUser />
            </UserContextProvider> */}

            {/* <ShoppingCart /> */}

            {/* <Generics<{ id: number; name: string }>
                items={[{ id: 2, name: "mansour" }]}
                onClick={(value) => {
                    console.log(value.id);
                }}
            /> */}

            <ApiExample />
        </>
    );
}

export default App;
