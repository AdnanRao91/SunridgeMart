import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/navigation"
 

export default function Layout({ children, hideHeader, hideFooter }) {
  const router = useRouter
  return (
    <div>
      {
        router.pathname == 'UserLogin'
      }
      {/* <Header />
      {children}
      <Footer /> */}
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  )
}