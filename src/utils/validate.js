import * as yup from 'yup';
/// Define validation schema for all inputs fields in the application
/// using yup
const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match')
})


export default schema;

