import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Item } from "./type";

const ApiExample = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const callToApi = async () => {
            setLoading(true);
            const response = await axios.get<Item[]>("https://jsonplaceholder.typicode.com/posts");
            setLoading(false);
            setItems(response.data);
        };
        callToApi();
    }, []);

    const renderItems = useMemo(() => {
        return items.map((item) => <li key={item.id}>{item.title}</li>);
    }, [items]);

    return (
        <ul>
            {loading && <h1>Loading items ...</h1>}
            {renderItems}
        </ul>
    );
};

export default ApiExample;
