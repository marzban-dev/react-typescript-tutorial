import { useReducer } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
};

type ShoppingCartState = {
    products: Product[];
};

type AddAction = {
    type: "add";
    payload: Product;
};

type RemoveAction = {
    type: "remove";
    payload: number;
};

type ShoppingCartActions = AddAction | RemoveAction;

const initialState: ShoppingCartState = {
    products: [],
};

const reducer = (state: ShoppingCartState, action: ShoppingCartActions) => {
    switch (action.type) {
        case "add":
            return { products: [...state.products, action.payload] };
        case "remove":
            return { products: state.products.filter((product) => product.id !== action.payload) };
        default:
            return { products: [] };
    }
};

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addProduct = () => {
        const id = Math.floor(Math.random() * 10000);

        dispatch({
            type: "add",
            payload: {
                id,
                price: Math.floor(Math.random() * 100),
                title: "Some product - " + id,
            },
        });
    };

    const removeProduct = (id: number) => {
        dispatch({
            type: "remove",
            payload: id,
        });
    };

    const renderCart = () => {
        if (state.products.length !== 0) {
            return state.products.map((product) => {
                return (
                    <li style={{ paddingBottom: 20, listStyle: "none" }}>
                        <span>
                            {product.title} :
                            <span
                                style={{
                                    color: "green",
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    paddingLeft: 5,
                                }}
                            >
                                {product.price}$
                            </span>
                        </span>
                        <button
                            onClick={() => removeProduct(product.id)}
                            style={{ marginLeft: 10 }}
                        >
                            Remove
                        </button>
                    </li>
                );
            });
        }

        return <div style={{ fontSize: 20, color: "GrayText" }}>Your cart is empty</div>;
    };

    const getTotalPrice = () => {
        return state.products.reduce((prev, current) => prev + current.price, 0);
    };

    return (
        <div>
            <button onClick={addProduct}>Add product</button>

            <section>
                <h2>Shopping Cart</h2>

                <ul style={{ border: "2px solid black", maxWidth: 300, padding: 20 }}>
                    {renderCart()}
                </ul>

                <span style={{ fontSize: 25 }}>
                    Total price :
                    <span style={{ fontWeight: "bold", color: "red", paddingLeft: 10 }}>
                        {getTotalPrice()}$
                    </span>
                </span>
            </section>
        </div>
    );
};

export default ShoppingCart;
