import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../formComponent/FormsControls'
import {required} from "../../utils/validators";


let SingInForm = props => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <span>Email:</span>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="email" placeholder="Email" validate={[required]}/>
            <span>Пароль:</span>
            <Field className={'inp_txt'} component={Input}
                   type="password" name="password" placeholder="Password" validate={[required]}/>

            <button className={'inp_sbm'} type="submit" label="submit">Увійти</button>
        </form>
    )
};

SingInForm = reduxForm({
    form: 'Auth',
})(SingInForm);

export default SingInForm;