import "./App.css";
import AddItem from "./components/add-item";
import RenderItems from "./components/render-items";
import { TodoContextProvider } from "./context/to-do-context";

function App() {
    return (
        <TodoContextProvider>
            <div
                style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    fontFamily: "sans-serif",
                    padding: "40px 0",
                }}
            >
                <div style={{ width: 550 }}>
                    <RenderItems />
                    <AddItem />
                </div>
            </div>
        </TodoContextProvider>
    );
}

export default App;
