import React, { useState } from 'react';

const ForgotPasswordRequest = () => {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleRequestPasswordReset = (e) => {
        e.preventDefault();
        setEmailSent(!emailSent)
        // Implement your logic to send a password reset email here
        // Set setEmailSent to true if the email is successfully sent
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 mt-36">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Forgot Password</h1>
                {!emailSent ? (
                    <form onSubmit={handleRequestPasswordReset}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mb-4 p-2 rounded border border-gray-300 outline-none"
                        />
                        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                            Reset Password
                        </button>
                    </form>
                ) : (
                    <p className="text-center">
                        Password reset instructions have been sent to your email.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordRequest;
