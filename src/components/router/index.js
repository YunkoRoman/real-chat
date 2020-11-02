import React,  {Component} from 'react';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import ChatPage from '../../containers/chatPage'
import Registration from "../../containers/registrationPage/Registration";
import SingIn from "../../containers/SingInPage/SingIn";


class Router extends Component {



    render(){
        return(
            <Switch>
                <Route path={'/'} >
                    <ChatPage/>
                </Route>

            </Switch>
        )
    }
}



const mapStateToProps = (state) => {
    // console.log(state);
    return {
        successUserCheck:state.successUserCheck
    }
};



export default connect(mapStateToProps, null)(Router)
