import "./App.css";
import CustomInput from "./components/custom-input";

function App() {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value;
    };

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    };

    const onSubmitHandler = (event : React.FormEvent<HTMLFormElement>) => {
        event.target;
    }

    const onKeyDownHandler = (event : React.KeyboardEvent<HTMLButtonElement>) => {
        event.key;
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler} onKeyDown={onKeyDownHandler}>Click Me</button>

            <CustomInput onChange={(e) => {
                e.target.value
            }} value=""/>
        </form>
    );
}

export default App;
