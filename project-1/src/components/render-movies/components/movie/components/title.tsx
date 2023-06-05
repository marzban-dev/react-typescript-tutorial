export type TitleProps = {
    children : string;
}

const Title = ({children} : TitleProps) => {
    return <h2>{children}</h2>;
};

export default Title;