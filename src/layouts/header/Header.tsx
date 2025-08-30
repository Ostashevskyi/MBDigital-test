import React from 'react'
import styles from "./Header.module.css"
import AuthButton from '../../components/buttons/authButton/AuthButton'

const Header = () => {
  return (
    <header>
        <div>
            <img />
            <p>Learny</p>
        </div>
        <div>
            <AuthButton>
                Sign Up
            </AuthButton>
        </div>
    </header>
  )
}

export default Header