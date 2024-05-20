import React from 'react';
import myHeader from './headerStyle.module.css'
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import SearchBar from "./SearchBar";
import Background from "../../../src/images/Background_main2.png";
import myStyle from "../../../src/styles/globalStyle.module.css";



const Header = () => {
    return (
        <div className={myHeader.headerBody}>
            <HeaderLeft/>
            <SearchBar/>
            <HeaderRight/>
            <img src={Background} className={myStyle.background_img} alt={''}/>
        </div>
    );
};

export default Header;