import React from 'react';
import News from "../../images/News.svg";
import Notifications from "../../images/Notifications.svg";
import Settings from "../../images/Settings.svg";
import myHeader from "./headerStyle.module.css";


const HeaderRight = () => {
    return (
        <div className={myHeader.header_right}>
            <img src={News} alt={""} className={myHeader.header_icons} />
            <img src={Notifications} alt={""} className={myHeader.header_icons} />
            <img src={Settings} alt={""} className={myHeader.header_icons} />
        </div>
    );
};

export default HeaderRight;