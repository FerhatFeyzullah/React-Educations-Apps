import React, { useState } from 'react'
import '../css/Header.css'
import { BsBasket } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket);
    const dispatch = useDispatch();
    const changeTheme = () => {
        const root = document.getElementById('root');
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "white";
        }
        else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
        setTheme(!theme)
    }

    return (

        <div className='header-main'>
            <div className='flex-row'>
                <img className='header-logo' src="./src/images/logo.png" onClick={() => navigate('/')} />
                <p className='logo-text'>HUHU A.S</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Bir sey ara' />
                <div>
                    {
                        theme ? <IoSunnyOutline className='header-icon' onClick={changeTheme} /> : <IoIosMoon className='header-icon' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color='warning'>
                        <BsBasket className='header-icon' />
                    </Badge>
                </div>
            </div>

        </div>


    )
}

export default Header

