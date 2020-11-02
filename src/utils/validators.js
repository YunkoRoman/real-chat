export const required = value =>
    value ? undefined : 'Field is required';


export const minLengthCreator = (minLength) => (value) =>
    value.length < minLength ? `Min length is ${minLength} symbols` : undefined;


export const validEmail = value =>
    value && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value) ? 'Invalid email address' : undefined;


export const matchInput = (input, allInputs) =>
    input === allInputs.password ? undefined : 'passwords is not concord';