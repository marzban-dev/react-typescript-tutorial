export type Image = {
    url: string;
    width: number;
    height: number;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    image: Image;
    createdAt : Date;
};

export type ProductProps = {
    onClick : () => void;
} & Product;