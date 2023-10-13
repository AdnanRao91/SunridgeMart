'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik } from 'formik';
import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { LoginFormSchema } from '../../utils/Validations';
import { post } from "../../api-services"
import { endPoints } from '../../constants';
import { SnackbarUtility, TokenStorage } from '../../utils';
import { useRouter } from 'next/router';
import LoadingButton from "@/components/LoadingButton"
import withAuth from "@/HOC"

const Login = () => {
    const router = useRouter()
    let isCheckout = router.query.isCheckout || false
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleToken = new TokenStorage
    const showSnackbar = new SnackbarUtility

    useLayoutEffect(() => {
        if (handleToken.getToken()) {
            router.push('/')
        }
    }, [])

    const handleNavigate = () => {
        if (isCheckout) {
            router.push('/check-out')
        } else {
            router.push('/')
        }
    }

    const handleLogin = async (values) => {
        try {
            setIsLoading(true)
            let payload = {
                email: values.email,
                password: values.password
            }
            let response = await post(endPoints.login, payload)
            if (response.code == 200) {
                handleToken.saveToken(response.data.token)
                showSnackbar.successMessage(response.message)
                setIsLoading(false)
                handleNavigate()
            } else {
                setIsLoading(false)
                showSnackbar.errorMessage(response.message)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error, "errorerror")
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };

    return (
        <div className="flex items-center justify-center mt-36">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Welcome to Sunridge Mart</h1>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    validationSchema={LoginFormSchema}
                    onSubmit={(values) => {
                        handleLogin(values)
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
                            <input
                                type="email"
                                placeholder="Email"
                                name='email'
                                value={values.email}
                                onBlur={handleBlur}
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
                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={values.rememberMe}
                                        onChange={(e) => setValues({
                                            ...values,
                                            rememberMe: e.target.checked
                                        })}
                                        className="mr-2"
                                    />
                                    Remember Me
                                </label>
                                <Link href="/forgot-password-request" className="text-blue-500 hover:underline">Forgot Password?</Link>
                            </div>
                            <LoadingButton isLoading={isLoading} title="Login" handleSubmit={handleSubmit} />
                            {/* <button onClick={handleSubmit} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">
                                Login
                            </button> */}
                            <p className="text-center mt-4">
                                Don't have an account?{' '}
                                <Link href="/register" className="text-blue-500 hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </>
                    )}
                </Formik>
            </div>
        </div >
    );
};

export default Login
