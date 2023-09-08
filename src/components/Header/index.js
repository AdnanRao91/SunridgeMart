import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
      <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="#" class="flex items-center">
                  <Image src="/assets/home/logo.png" width={164} height={139} alt="Sunridge Logo" />
              </a>
              <div class="flex items-center lg:order-2">
                  <a href="#" class="">
                    <Image src="/assets/home/heart.png" width={30} height={30} alt="heart"/>
                  </a>
                  <a href="#" class="mx-8">
                    <Image src="/assets/home/user.png" width={30} height={30} alt="heart"/>
                  </a>
                  <a href="#" class="">
                    <Image src="/assets/home/bag.png" width={30} height={30} alt="heart"/>
                  </a>
                  <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
              <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                      <li>
                          <Link href="/" class="block py-2 pr-4 pl-3 black-text uppercase rounded f-18 proxima-regular" aria-current="page">Home</Link>
                      </li>
                      {/* <li>
                          <a href="#" class="block py-2 pr-4 pl-3 black-text uppercase border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">home</a>
                      </li> */}
                      <li>
                          <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase f-18 proxima-regular">about</Link>
                      </li>
                      <li>
                          <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase f-18 proxima-regular">shop now</Link>
                      </li>
                      <li>
                          <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase f-18 proxima-regular">contact us</Link>
                      </li>
                      <li>
                          <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase f-18 proxima-regular">donate a ration box</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <section className="banner-header-postion">
        <div className="banner-header">
            <div className="relative content-banner">
                <div className="main-heading-banner leading-none">
                CHAKKI ATTA
                </div>
                <div className="f-24 text-light-black uppercase proxima-regular text-center lh-0">
                SUNRIDGE FORTIFIED CHAKKI ATTA 5 KG
                </div>
                <div className="relative">
                <div className="mt-12">
                    <img src='/assets/home/slide-img.png' className="w-auto" alt="atta fortified" />
                    </div>
                </div>
            </div>
            </div>
            <div className="overlay"></div>
      </section>
  </header>
    )
}