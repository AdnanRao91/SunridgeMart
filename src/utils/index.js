import React from "react";


// types.ts


// types.js
export const TOKEN_KEY = 'token';

export const LoginPayload = {
  email: '',
  password: '',
};

export const MainResponse = {
  token: '',
};
// tokenStorage.js
export class TokenStorage {
  clearStorage() {
    window.localStorage.removeItem('token');
  }

  saveToken(token) {
    window.localStorage.setItem('token', token);
  }

  getToken() {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem('token')
    } else {
      return false
    }
  }
}

export default new TokenStorage();

export const validateForm = (formData) => {
  const errors = {};

  if (!formData.email) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Invalid email address.';
  }

  if (!formData.password) {
    errors.password = 'Password is required.';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(formData.password)) {
    errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one digit.';
  }

  if (!formData.username) {
    errors.username = 'Username is required.';
  }

  if (!formData.firstName) {
    errors.firstName = 'First Name is required.';
  }

  if (!formData.lastName) {
    errors.lastName = 'Last Name is required.';
  }

  if (!formData.dateOfBirth) {
    errors.dateOfBirth = 'Date of Birth is required.';
  }

  if (!formData.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required.';
  }

  if (formData.gender === 0) {
    errors.gender = 'Please select a gender.';
  }

  return errors;
};



