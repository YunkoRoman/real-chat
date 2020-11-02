import React from 'react';
import {Route, Redirect} from "react-router-dom";


const GuardedRoute = ({component: Component, auth, ...rest}) => {
    //It's govno code =)

    const userObj = JSON.parse(localStorage.getItem('user'));

    let isLogged = false;
    if (userObj) isLogged = userObj.isLogged;
    return (
        <Route {...rest} render={(props) => (
            isLogged === true
                ? <Component {...props} />
                : <Redirect to='/SingIn'/>
        )}/>
    )
};

export default GuardedRoute;

