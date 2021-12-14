import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

function Header() {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt='Punk Logo'></img>
            </div>
            <div className='searchBarContainer'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt='Search Icon'></img>
                </div>
                <input className='searchInput' placeholder='Collection, item or user ...'></input>
            </div>

            <div className='headerItems'>
                <p>Drop</p>
                <p>MarketPlace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt='Theme Switch Icon'></img>
                </div>
            </div>
            <div className='loginButton'>
                GET IN
            </div>
        </div>
    )
}

export default Header;
