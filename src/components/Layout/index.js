
import Header from "../Header";
import Footer from "../footer";
import LoadingSkeleton from "../LoadingSkeleton"

export default function Layout({children}){
  const isLoading = true;
    return(
        <>
       {isLoading ? (
          <div>
          <Header />
          {children}
          <Footer />
        </div>
) : (
  <LoadingSkeleton />

)}

        </>
      
    )
}