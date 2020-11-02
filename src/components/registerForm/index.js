import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, minLengthCreator, validEmail, matchInput} from '../../utils/validators'
import {Input} from '../formComponent/FormsControls'

const minLength8 = minLengthCreator(8);
let RegisterForm = props => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <span>Ім'я:</span>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="name"
                   validate={[required]}/>
            <span>Фамілія:</span>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="surname" placeholder="Surname"
                   validate={[required]}/>
            <span>Email:</span>
            <Field className={'inp_txt'} component={Input}
                   type="text" name="email" placeholder="E-mail"
                   validate={[required, validEmail]}/>
            <span>Пароль:</span>
            <Field className={'inp_pass'} component={Input}
                   type="password" name="password" placeholder="Password"
                   validate={[required, minLength8]}/>
            <span>Повторіть пароль:</span>
            <Field className={'inp_pass'} component={Input}
                   type="password" name="password2"
                   placeholder="Retype password"
                   validate={[required, matchInput]}/>

            <button className={'inp_sbm'} type="submit" label="submit">Зареєструватися</button>
        </form>
    );

};


RegisterForm = reduxForm({
    form: 'login',
})(RegisterForm);

export default RegisterForm;