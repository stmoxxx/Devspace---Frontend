import React from 'react';
import myNav from "../navbar.module.css";
import {Link} from "react-router-dom";
import MusicIcon from "../../../images/Music.svg";

const Music = () => {
    return (
        <div className={myNav.item}>
            <Link to={"/"}>
                <img src={MusicIcon} alt={""} className={myNav.item_img} />
            </Link>
        </div>
    );
};

export default Music;