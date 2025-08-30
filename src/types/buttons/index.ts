export interface IDefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonProps extends IDefaultButtonProps {
    href?: string
}

export type TBuyButtonProps = Omit<IButtonProps, "href"> & {
    loading: boolean;
}
