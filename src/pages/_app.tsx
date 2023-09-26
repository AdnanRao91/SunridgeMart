import '@/styles/globals.css'
import { useRef } from "react"
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SnackbarProvider } from 'notistack'
import login  from '../pages/login'
export default function App({ Component, pageProps }: AppProps) {

  const providerRef = useRef();
  const isLoginPage = Component === login;
  if(isLoginPage){
    return <Component {...pageProps} />;
  }
  
  return (
    <SnackbarProvider ref={providerRef} maxSnack={3}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  )
}
