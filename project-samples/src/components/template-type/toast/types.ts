type Vertical = "top" | "center" | "bottom";
type Horizontal = "left" | "center" | "right";

type Positions = Exclude<`${Vertical}-${Horizontal}`,"center-center"> | "center" ;

export type ToastProps = {
    position: Positions;
};
