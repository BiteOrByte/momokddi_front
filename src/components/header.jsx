import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <header>
            <p>점메추</p>
            <Link to='/myPage' className='menuIcon'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Link>
        </header>
    );
}

export default Header;
