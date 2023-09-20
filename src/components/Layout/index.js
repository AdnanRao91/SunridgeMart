import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/navigation"
 

export default function Layout({ children }) {
  const router = useRouter
  return (
    <div>
      {
        router.pathname == 'UserLogin'
      }
      <Header />
      {children}
      <Footer />
    </div>
  )
}