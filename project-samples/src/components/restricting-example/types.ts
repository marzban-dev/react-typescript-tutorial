type CircleProps = {
    children?: never;
    icon: string;
    circle: true;
}

type RectangleProps = {
    children: string;
    icon?: string;
    circle?: never;
}

export type RestrictingExampleProps = RectangleProps | CircleProps
