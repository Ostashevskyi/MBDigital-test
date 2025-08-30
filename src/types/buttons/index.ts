export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
}

export type TBuyButtonProps = Omit<IButtonProps, "href"> & {
    loading: boolean;
}