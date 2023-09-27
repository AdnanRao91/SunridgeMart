import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { post } from '../../api-services'
import { SnackbarUtility } from '../../utils';
import { useRouter } from 'next/router';
const ForgotPasswordRequest = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const showSnackbar = new SnackbarUtility

    const handleForgotPassword = () => {
        const apiUrl = 'Account/forgot-password'
        const payload = {
            email,
            phoneNumber: phone
        }
        post(apiUrl, payload).then((response) => {
            console.log(response,"responseresponse")
            showSnackbar.successMessage(response.message)
            setEmailSent(!emailSent)
            setTimeout(() => {
                router.push({
                    pathname: '/forgot-password-confirmation',
                    query: {email}
                })
            }, 2000);
        }).catch((err) => {
            console.log(err, "errerrerr")
        })
    }
    return (
        <Layout hideHeader hideFooter>
            <div className="flex items-center justify-center h-screen bg-gray-100 mt-36">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Forgot Password</h1>
                    {!emailSent ? (
                        <div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                            />
                            <input
                                type="string"
                                placeholder="Enter your phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                            />
                            <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={handleForgotPassword}>
                                Reset Password
                            </button>
                        </div>
                    ) : (
                        <p className="text-center">
                            Password reset instructions have been sent to your email.
                        </p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ForgotPasswordRequest;
