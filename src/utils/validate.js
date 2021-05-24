import * as yup from 'yup';
/// Define validation schema for all inputs fields in the application
/// using yup

/// validate login / signup forms
export const authInputsValidation = yup.object().shape({
    username: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match'),
})


/// validate order multiSteps form step 1
export const step1Validation = yup.object().shape({
    portraitName: yup.string().required(),
    portraitStyle: yup.string().nullable().required(),
})


/// validate order multiSteps form step 2
export const step2Validation = yup.object().shape({
    fullBody: yup.string().nullable().required(),
    portraitSize: yup.string().nullable().required(),
})

/// validate order multiSteps form step 2
export const step3Validation = yup.object().shape({
    image: yup.mixed().required()   
})


export const emailValidation = yup.object().shape({
    email: yup.string().email().required(),
})

export const passwordsValidation = yup.object().shape({
    password: yup.string().min(6).required(),
    confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match'),
})

