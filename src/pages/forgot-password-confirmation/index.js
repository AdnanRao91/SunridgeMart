import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { endPoints } from '../../constants';

const PasswordResetConfirmation = () => {
    const router = useRouter()
    let { email } = router.query || {}
    const [newPassword, setNewPassword] = useState('');
    const [otp, setOtp] = useState('');

    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

    const handlePasswordReset = (e) => {
        const payload = {
            email,
            otp,
            newPassword
        }
        post(endPoints.resetPassword, payload).then((response) => {
            showSnackbar.successMessage(response.message)
            setPasswordResetSuccess(!passwordResetSuccess)
            setTimeout(() => {
                router.push({
                    pathname: '/login',
                })
            }, 2000);
        }).catch((err) => {
            console.log(err, "errerrerr")
        })

    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 mt-36">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Reset Password</h1>
                {!passwordResetSuccess ? (
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            disabled
                            value={email}
                            className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                        />
                           <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                        />
                        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={handlePasswordReset}>
                            Reset Password
                        </button>
                    </div>
                ) : (
                    <p className="text-center">
                        Your password has been successfully reset.
                    </p>
                )}
            </div>
        </div>
    );
};

export default PasswordResetConfirmation;
