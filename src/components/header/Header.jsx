import React from 'react';
import myHeader from './headerStyle.module.css'
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import SearchBar from "./SearchBar";



const Header = () => {
    return (
        <div className={myHeader.headerBody}>
            <HeaderLeft/>
            <SearchBar/>
            <HeaderRight/>
        </div>
    );
};

export default Header;