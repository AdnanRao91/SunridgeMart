import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required')
});

export const SignupFormSchema = Yup.object().shape({
  username: Yup.string().required('Username is Required'),
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  phoneNumber: Yup.number().required('Phone number is Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one symbol, and one number'
    )
    .min(8, 'Password must be at least 8 characters long'),
  email: Yup.string().email('Invalid email').required('Required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  gender: Yup.number()
    .required('Gender is required')
    .oneOf([0, 1, 2, 3], 'Invalid gender selection'),
});

