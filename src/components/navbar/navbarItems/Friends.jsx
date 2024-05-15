import React from 'react';
import myNav from '../navbar.module.css'
import FriendsIcon from '../../../images/Friends.svg'
import {Link} from "react-router-dom";


const Friends = () => {
    return (
        <div className={myNav.item}>
            <Link to={"/"}>
                <img src={FriendsIcon} alt={""} className={myNav.item_img} />
            </Link>

        </div>
    );
};

export default Friends;