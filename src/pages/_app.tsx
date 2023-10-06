import React, { useEffect } from "react"
import '@/styles/globals.css'
import { useRef } from "react"
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SnackbarProvider } from 'notistack'
import login from '../pages/login'
import { TokenStorage } from "@/utils"
import { post } from "@/api-services"
import { endPoints } from "@/constants"
import { Provider } from "react-redux";
import store from '@/store';
export default function App({ Component, pageProps }: AppProps) {
  const providerRef = useRef();
  const handleStorage = new TokenStorage

  useEffect(() => {
    let guid = handleStorage.getGuid()
    if (!guid) {
      post(endPoints.registerCustomer, {}).then((response) => {
        handleStorage.saveGuid(response?.data.customerId)
      }).catch((error) => {
        console.log(error, "catch some error")
      })
    }
  }, [])


  const isLoginPage = Component === login;
  if (isLoginPage) {
    return (
      <SnackbarProvider ref={providerRef} maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    )
  }



  return (
    <Provider store={store}>
      <SnackbarProvider ref={providerRef} maxSnack={3}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </Provider>

  )
}
