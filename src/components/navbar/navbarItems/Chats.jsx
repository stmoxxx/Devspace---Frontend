import React from 'react';
import myNav from "../navbar.module.css";
import {Link} from "react-router-dom";
import ChatsIcon from "../../../images/Chats.svg";

const Chats = () => {
    return (
        <div className={myNav.item}>
            <Link to={"/"}>
                <img src={ChatsIcon} alt={""} className={myNav.item_img}/>
            </Link>
        </div>
    );
};

export default Chats;