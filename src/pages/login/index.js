import { validateForm } from '@/utils';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    const handleLogin = (e) => {
        e.preventDefault();

        const formErrors = validateForm({ email, password });
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };

    return (
        <div className="flex items-center justify-center h-screen mt-36">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Welcome to Sunridge Mart</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                {errors.password && <p className="text-red-500">{errors.password}</p>}
                <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2"
                        />
                        Remember Me
                    </label>
                    <Link href="/forgot-password-request" className="text-blue-500 hover:underline">Forgot Password?</Link>
                </div>
                <button onClick={handleLogin} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Login
                </button>
                <p className="text-center mt-4">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
