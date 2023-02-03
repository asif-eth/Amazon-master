import React from "react"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

function Header(){
    return(
        <div className="header">
            <Link to="/">
                <img className="header-icon" src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="Amazon"></img>
            </Link>
            <input className="header-searchBar"/>
            <SearchIcon className="header-searchIcon" />
            <div className="header-nav">

                <div className="header-option">
                    <span className="header-optionOne">Hello Guest</span>
                    <span className="header-optionTwo">Sign in</span>
                </div>

                <div className="header-option">
                    <span className="header-optionOne">Returns</span>
                    <span className="header-optionTwo">& Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-optionOne">Your</span>
                    <span className="header-optionTwo">Prime</span>
                </div>

                <Link to="Checkout">
                    <div className="shopping-cart">
                        <ShoppingCartIcon />
                        <span className="header_optionTwo header-basketCount">0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header