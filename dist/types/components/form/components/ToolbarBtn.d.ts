import { ReactNode } from 'react';
type BaseProps = {
    title: string;
    active?: boolean;
    disabled?: boolean;
    onClick: () => void;
};
type IconButtonProps = BaseProps & {
    icon: string;
    children?: never;
};
type ChildrenButtonProps = BaseProps & {
    children: ReactNode;
    icon?: never;
};
type ToolbarButtonProps = IconButtonProps | ChildrenButtonProps;
export declare function ToolbarButton(props: ToolbarButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ToolbarBtn.d.ts.map