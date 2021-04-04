import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navcontainer} from './Navbar-styles'

export const Navbar = () => {

    return (
        <Navcontainer>

            <NavLink className='nav' activeStyle={{fontWeight: 'bold'}} exact to='/'>HOME</NavLink>
            <NavLink className='nav' activeStyle={{fontWeight: 'bold'}} exact to='/about'>ABOUT</NavLink>
            
        </Navcontainer>
    ) 
}



/* className={activeLink === home ? `active-navlink` : `normal-navlink`} */