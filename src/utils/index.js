import React from "react";
import { useSnackbar } from 'notistack'


// types.js
export const TOKEN_KEY = 'token';

export const LoginPayload = {
  email: '',
  password: '',
};

export const MainResponse = {
  token: '',
};

class TokenStorage {
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


class SnackbarUtility {
  constructor() {
    this.snackbar = useSnackbar();
  }

  successMessage(message) {
    this.snackbar.enqueueSnackbar(message, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      autoHideDuration: 2000,
    });
  }

  errorMessage(message) {
    this.snackbar.enqueueSnackbar(message, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      autoHideDuration: 2000,
    });
  }
}


export {
  SnackbarUtility,
  TokenStorage
}