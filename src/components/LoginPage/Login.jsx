import React from 'react';
import Background from '../../../src/images/outer-space-background 1.jpg'
import myLogin from './login.module.css'
import myStyle from '../../styles/globalStyle.module.css'

const Login = () => {
    return (
        <div className={"login_wrap"}>
            <img src={Background} alt={''} className={myStyle.background_img}/>
            <div className={"container d-flex z-3 flex-column"}>
                <div className={myLogin.login_form_container}>
                    <div className={myLogin.message}>Wellcome to devspace !</div>
                    <div className={myLogin.login_form}>
                        <div className={myLogin.choice}>
                            <div className={myLogin.login_choice}>Login</div>
                            <div className={myLogin.register_choice}>Register</div>
                        </div>
                        <div className={myLogin.login_input_container}>
                            <div className={myLogin.login_input_wrap}>
                                <div>Enter Nickname / E-mail</div>
                                <input className={myLogin.my_input} placeholder={"Nickname/E-mail"}/>
                            </div>
                            <div className={myLogin.password_input_wrap}>
                                <div>Enter password</div>
                                <input className={myLogin.my_input} placeholder={"Password"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;