import '@/styles/globals.css'
import { useRef } from "react"
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SnackbarProvider } from 'notistack'
export default function App({ Component, pageProps }: AppProps) {

  const providerRef = useRef();

  return (
    <SnackbarProvider ref={providerRef} maxSnack={3}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  )
}
