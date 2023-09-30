import React from 'react'
import './header.css';
import logo from '../../assets/SVGs/logo.svg';

const Header = () => {
  return (
    <div className='header-menu'>
        <section className='header-menu-btn'>
            <div id='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <p>Why Bitly?</p>
                <p>Products</p>
                <p>Pricing</p>
                <p>Resourses</p>
            </div>
            <div className='register-menu'>
                <p>Log in</p>
                <p id='signup'>Sign up Free</p>
                <p id='quote-btn'>Get a Quote</p>
            </div>
        </section>
    </div>
  )
}

export default Header;