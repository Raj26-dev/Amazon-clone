import React from 'react'
import './header.scss';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='header'>
            <div className='header-logo'>
                <Link to ="/">
                <AddBusinessIcon fontSize="large"/>&nbsp;
                <span className="header__logoName">E-shop</span>
                </Link>
           
            </div>
            <div className='header-search'>
                <input />
            </div>
            <div className='header-nav'>
                <div className="header-nav-user">
                    <span className="header-nav-lineOne">Hello Guest</span>
                    <span className="header-nav-lineTwo">Sign In</span>
                </div>
                <div className="header-nav-itemBasket">
                    <Link to="/checkout">
                    <ShoppingCartIcon fontSize="small"/>&nbsp;Cart
                    </Link>
                
                </div>
            </div>
        </header>
    )
}

export default Header
