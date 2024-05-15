import React from 'react';
import myHeader from "./headerStyle.module.css";
const SearchBar = () => {
    return (
        <div className={myHeader.search_bar_container}>
            <input className={myHeader.search_bar} placeholder={"Search..."}>

            </input>
        </div>
    );
};

export default SearchBar;