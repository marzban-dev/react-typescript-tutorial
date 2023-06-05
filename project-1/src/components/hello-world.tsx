type HelloWorldProps = {
    name : string;
    color : string;
}

const HelloWorld = (props : HelloWorldProps) => {

    const containerStyle : React.CSSProperties = {
        color : props.color,
        fontSize : 60
    }

    return (
        <div style={containerStyle}>
            Hello world i am {props.name}
        </div>
    )
}

export default HelloWorld;