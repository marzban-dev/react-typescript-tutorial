type CustomInputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    value: string;
};

const CustomInput = ({ onChange, value }: CustomInputProps) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event, 5);
    };

    return (
        <div>
            <input onChange={onChangeHandler} value={value} />
        </div>
    );
};

export default CustomInput;
