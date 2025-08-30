import type { IButtonProps } from '../../../types/buttons'

const RefetchButton = ({ children, ...rest}: IButtonProps) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default RefetchButton