import React from 'react';
import style from './FormsControls.module.css'

export const Input = ({input, meta, ...props}) => {
    const ShowErr = meta.touched && meta.error;
    return (
        <div className={style.Input}>
            <div className={(ShowErr ? style.inputError : '')}>
                <input {...input} {...props}/>
            </div>
            {ShowErr && <span className={style.errorText}>{meta.error}</span>}

        </div>
    )
};
