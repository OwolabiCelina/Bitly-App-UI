import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header-menu'>
        <section className='header-menu-btn'>
            <div>
                <p>bitly</p>
            </div>
            <div className='menu'>
                <p>Why Bitly?</p>
                <p>Products</p>
                <p>Pricing</p>
                <p>Resourses</p>
            </div>
            <div className='register-menu'>
                <p>Login</p>
                <p>Sign up Free</p>
                <p>Get a Quote</p>
            </div>
        </section>
    </div>
  )
}

export default Header;