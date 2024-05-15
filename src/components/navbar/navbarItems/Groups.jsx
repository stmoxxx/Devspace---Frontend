import React from 'react';
import myNav from '../navbar.module.css'
import GroupsIcon from '../../../images/Groups.svg'
import {Link} from "react-router-dom";


const Groups = () => {
    return (
        <div className={myNav.item}>
            <Link to={"/"}>
                <img src={GroupsIcon} alt={""} className={myNav.item_img} />
            </Link>

        </div>
    );
};

export default Groups;