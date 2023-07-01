type GenericsProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};

const Generics = <T extends { id: number }>({ items, onClick }: GenericsProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            <div>
                {items.map((item, index) => (
                    <div key={index} onClick={() => onClick(item)}>
                        Item {index}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Generics;
