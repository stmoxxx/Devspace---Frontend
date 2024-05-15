import React from 'react';
import myNav from './navbar.module.css'
import Friends from "./navbarItems/Friends";
import Groups from "./navbarItems/Groups";
import Chats from "./navbarItems/Chats";
import Music from "./navbarItems/Music";

const Navbar = () => {
    return (
        <div className={myNav.navbar}>
            <Friends/>
            <Groups/>
            <Chats/>
            <Music/>
        </div>
    );
};

export default Navbar;