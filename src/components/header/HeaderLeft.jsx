import React from 'react';
import myHeader from "./headerStyle.module.css";
import Devspace from "../../images/devspace.svg";
import {Link} from "react-router-dom";

const HeaderLeft = () => {
    return (
        <div className={myHeader.header_left}>
            <div className={myHeader.logo_container}>
                <img src={Devspace} alt={""} className={myHeader.logo}/>
            </div>
            <div className={myHeader.links_container}>
                <Link to={"/"} className={myHeader.link}>Work</Link>
                <Link to={"/"} className={myHeader.link}>Learn</Link>
                <Link to={"/"} className={myHeader.link}>Freelance</Link>
            </div>
        </div>
    );
};

export default HeaderLeft;