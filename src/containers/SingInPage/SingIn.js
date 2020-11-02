import React, {Component} from 'react';
import SingInForm from "../../components/singInForm";

import './SingIn.css'
import {authIsSending, logout} from "../../actions/auth-actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {interceptors} from "../../interceptors/auth.interceptor";

class SingIn extends Component {

    constructor(props) {
        super(props);
        this.state = {redirect: false}
    }

    componentDidMount() {
        this.props.logout();
        localStorage.removeItem('user')
    }

    submit = ({email, password}) => {
        this.props.authUser(email, password)

    };

    redirect = () => {
        this.setState({redirect: true})
    };

    render() {

        if (this.props.auth.result) {
            if (this.props.auth.result.success) {
                const data = this.props.auth.result.msg;

                const userObj = {token: data, isLogged: true};
                localStorage.setItem('user', JSON.stringify(userObj));
                const user = JSON.parse(localStorage.getItem('user'));
                const token = user.token;
                interceptors(token);
                if (this.props.auth.result.success === true && token !== undefined || null) return <Redirect
                    from={'/SingIn'}
                    to={'/'}/>
            }

        }
        if (this.state.redirect) {
            return <Redirect
                from={'/SingIn'}
                to={'/registration'}/>
        }
        if (this.props.auth.errorStatus === 500) {
            alert('Неправильний Email або пароль');
            return (
                <div>
                    <div id="login-box">
                        <div className="left">
                            <h1>Вхід</h1>

                            <SingInForm onSubmit={this.submit}/>
                            <div className={'redirectToRegPage'}>
                                <span>Ви тут вперше? </span>
                                <span className={'redirectBtn'} onClick={this.redirect}>Зареєструватися</span>
                            </div>
                        </div>

                    </div>

                </div>
            )
        }
        return (
            <div>
                <div id="login-box">
                    <div className="left">
                        <h1>Вхід</h1>

                        <SingInForm onSubmit={this.submit}/>
                        <div className={'redirectToRegPage'}>
                            <span>Ви тут вперше? </span>
                            <span className={'redirectBtn'} onClick={this.redirect}>Зареєструватися</span>
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

const mapStateToProps = (state) => {

    return {
        auth: state.auth,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authUser: (email, password) => dispatch(authIsSending(email, password)),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)