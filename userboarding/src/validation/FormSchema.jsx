import * as yup from 'yup'

const formSchema= yup.object().shape({
  
     name: yup.string()
    .trim()
    .min(3, 'The name must be at least 3 characters long')
    .required('The name is required'),

    email: yup.string()
    .email('The email must be a valid email address')
    .required('The Email is required'),

    password:yup.string()
    .trim()
    .min(5, 'The name must be at least 5 characters long')
    .required('The password is required'),

    termsOfService: yup.boolean()
    .oneOf([true], 'Must Accept Terms and Conditions'),

})



export default formSchema