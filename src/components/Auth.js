import React, {useContext} from 'react';

import Card from './UI/Card';
import './Auth.css';
import {AuthContext} from '../context/auth-context';
import {NiceButton} from "../styled";

const Auth = props => {
    const myContext = useContext(AuthContext);
    const loginHandler = () => {
        myContext.login();
    };

    return (
        <div className="auth">
            <Card>
                <h2>You are not authenticated!</h2>
                <p>Please log in to continue.</p>
                <NiceButton onClick={loginHandler}>Log In</NiceButton>
            </Card>
        </div>
    );
};

export default Auth;