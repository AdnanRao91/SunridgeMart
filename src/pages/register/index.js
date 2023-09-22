import Link from 'next/link';
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        gender: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Implement your signup logic here
    };

    return (
        <div className="flex items-center justify-center h-screen  mt-36">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-6">Create an Account</h1>
                <form onSubmit={handleSignup} className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 rounded border border-gray-300 outline-none"
                        />
                        <label className="mb-2 block">
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full p-2 rounded border border-gray-300 outline-none"
                            >
                                <option value={0}>Select</option>
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                                <option value={3}>Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
