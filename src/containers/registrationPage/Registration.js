import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import RegisterForm from '../../components/registerForm'
import {dataIsSending} from "../../actions/registration-actions";



import './Registration.css'

class Registration extends Component {

    submit = form => {
        this.props.SendRegisterData(form);

    };

    render() {

        const {isRegister} = this.props.registrationRedux;

        if (isRegister) {
            alert('Ви успішно зареєструвались');
            return <Redirect to={'/SingIn'}/>
        }

        return (
            <div>
                <div id="login-box">
                    <div className="left">
                        <h1>Реєстрація</h1>
                        <RegisterForm onSubmit={this.submit}/>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        registrationRedux: state.registrationRedux
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SendRegisterData: (form) => dispatch(dataIsSending(form))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration)