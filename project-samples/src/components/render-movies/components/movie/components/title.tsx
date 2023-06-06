export type TitleProps = {
    children : React.ReactNode;
}

const Title = ({children} : TitleProps) => {
    return <h2>{children}</h2>;
};

export default Title;