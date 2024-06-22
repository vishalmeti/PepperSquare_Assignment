import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='navbar' >
            <img src={logo} alt="logo" className='logo' />
            <div className="links">
                <ul style={{ listStyleType: 'none', padding: 0 }} className='navLinks'>
                    <li>
                        <Link to="/" className='customLink'>The School</Link>
                    </li>
                    <li>
                        <Link to="/about" className='customLink'>Academics</Link>
                    </li>
                    <li>
                        <Link to="/life" className='customLink'>Life @ DBTR</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='customLink'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="navButtons">
                <Button className="outlineButton" label='CSR' />
                <Button className="solidButton" label='Donate ❤' />
            </div>
        </nav>
    )
}

export default Navbar