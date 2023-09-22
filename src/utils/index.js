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


