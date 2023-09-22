import { useRouter } from 'next/router';
import React, { useState } from 'react';

const PasswordResetConfirmation = () => {
    const router = useRouter()
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        setPasswordResetSuccess(!passwordResetSuccess)
        setTimeout(() => {
            router.push('/login')
        },3000
        );
        // Implement your logic to confirm and update the password here
        // Set setPasswordResetSuccess to true if the password is successfully reset
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 mt-36">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Reset Password</h1>
                {!passwordResetSuccess ? (
                    <form onSubmit={handlePasswordReset}>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                        />
                        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                            Reset Password
                        </button>
                    </form>
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
