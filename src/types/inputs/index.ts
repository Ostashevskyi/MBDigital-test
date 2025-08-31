export interface IInputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    error?: string;
}