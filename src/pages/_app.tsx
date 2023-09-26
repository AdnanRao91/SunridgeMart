import { useEffect } from "react"
import '@/styles/globals.css'
import { useRef } from "react"
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SnackbarProvider } from 'notistack'
import login from '../pages/login'
import { TokenStorage } from "@/utils"
export default function App({ Component, pageProps }: AppProps) {

  const providerRef = useRef();
  const handleStorage = new TokenStorage
  const isLoginPage = Component === login;
  if (isLoginPage) {
    return (
      <SnackbarProvider ref={providerRef} maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    )
  }

  useEffect(() => {
    let guid = handleStorage.getGuid()
    if (!guid) {
      console.log("test")
      handleStorage.saveGuid('1234')
    }
  }, [])

  return (
    <SnackbarProvider ref={providerRef} maxSnack={3}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  )
}
