import type { IButtonProps } from '../../../types/buttons'

const BuyCourseButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default BuyCourseButton