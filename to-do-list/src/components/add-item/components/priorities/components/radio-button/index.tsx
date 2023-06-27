import { RadioButtonProps } from "./types";

const RadioButton = ({ active, priority, value, ...rest }: RadioButtonProps) => {
    const priorityColors = [
        "rgb(124, 124, 124)",
        "rgb(51, 116, 222)",
        "rgb(219, 111, 39)",
        "rgb(224, 60, 60)",
    ];

    const iconStyle: React.CSSProperties = {
        fill: priorityColors[priority],
        filter: active ? "brightness(1)" : "brightness(0.4)",
        height: 30,
    };

    return (
        <div>
            <label htmlFor={`priority-${value}`} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={iconStyle}>
                    <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
                </svg>
            </label>
            <input
                {...rest}
                value={value}
                type="radio"
                name="priority"
                id={`priority-${value}`}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default RadioButton;
