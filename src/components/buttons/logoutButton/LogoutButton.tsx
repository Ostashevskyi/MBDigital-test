import { useNavigate } from 'react-router'
import AuthButton from '../authButton/AuthButton';
import { logout } from '../../../utils/logout';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(navigate)
    }
  return (
    <AuthButton onClick={handleLogout}>
        Logout
    </AuthButton>
  )
}

export default LogoutButton