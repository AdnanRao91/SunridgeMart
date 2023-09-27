import Link from 'next/link';
import React, { useState } from 'react';
import { SignupFormSchema, objectToFormData } from '../../utils/Validations';
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import moment from 'moment/moment';
import { post } from "../../api-services"
import { endPoints } from '../../constants';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleSignup = async (values) => {
        try {
            let payload = {
                username: values.username,
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                dateOfBirth: moment(values.date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
                phoneNumber: values.phoneNumber,
                gender: parseInt(values.gender),
                ImageFile: values.ImageFile
            }
            const formData = objectToFormData(payload)
            let response = await post(endPoints.register, formData)
            console.log(response,"responseresponse")
        } catch (error) {
            console.log(error, "errorerrorerror")
        }

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };

    return (
        <div className="flex items-center justify-center h-screen  mt-36">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Create an Account</h1>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                        dateOfBirth: '',
                        phoneNumber: '',
                        gender: 0,
                    }}
                    validationSchema={SignupFormSchema}
                    onSubmit={(values) => {
                        handleSignup(values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setValues
                    }) => (
                        <>
                            <div>
                            <input
                                    type="file"
                                    name="username"
                                    placeholder="Username"
                                    value={values.ImageFile}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={values.username}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <p className="text-red-500">{errors.username && touched.username && errors.username}</p>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onBlur={handleBlur}
                                    value={values.email}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                    />
                                    <span
                                        className="absolute top-[40%] transform -translate-y-1/2 right-2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <Visibility sx={{
                                            fontSize: "20px"
                                        }} /> : <VisibilityOff sx={{
                                            fontSize: "20px"
                                        }} />}
                                    </span>
                                </div>
                                <p className="text-red-500">{errors.password && touched.password && errors.password}</p>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <p className="text-red-500">{errors.firstName && touched.firstName && errors.firstName}</p>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <p className="text-red-500">{errors.lastName && touched.lastName && errors.lastName}</p>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={values.dateOfBirth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <p className="text-red-500">{errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth}</p>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    onChange={(e) => {
                                        const formattedValue = e.target.value.replace(/[^0-9+]/g, '');
                                        setValues({
                                            ...values,
                                            phoneNumber: formattedValue
                                        })
                                    }}
                                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                                />
                                <p className="text-red-500">{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</p>
                                <label className="mb-2 block">
                                    <select
                                        name="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded border border-gray-300 outline-none"
                                    >
                                        <option value={0}>Select</option>
                                        <option value={1}>Male</option>
                                        <option value={2}>Female</option>
                                        <option value={3}>Other</option>
                                    </select>
                                </label>
                                <p className="text-red-500">{errors.gender && touched.gender && errors.gender}</p>
                            </div>
                            <div className="col-span-2">
                                <button onClick={handleSubmit} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">
                                    Sign Up
                                </button>
                            </div>
                        </>
                    )}
                </Formik>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div >
    );
};

export default Register;
