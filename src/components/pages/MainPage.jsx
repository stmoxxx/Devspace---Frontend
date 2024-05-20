import React from 'react';
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import PostItem from "../post/PostItem";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <PostItem/>
        </div>
    );
};

export default MainPage;