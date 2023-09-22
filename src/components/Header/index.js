import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <div className="transition" style={{
                zIndex: 1000,
                position: scrollPosition > 40 ? "fixed" : 'absolute',
                left: 0,
                right: 0,
                top: 0,
                background: scrollPosition > 40 ? "#fff" : "transparent",
                boxShadow: scrollPosition > 40 ? "0 0 17.8px 0.2px #ababab" : 'none'
            }}>
                <nav class="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" class="flex items-center">
                            <Image src="/assets/home/logo.png" width={164} height={139} alt="Sunridge Logo" />
                        </Link>
                        <div class="flex items-center lg:order-2">
                            <Link href="#" class="">
                                <Image src="/assets/home/heart.png" width={30} height={30} alt="heart" />
                            </Link>
                            <Link href="/UserLogin" class="mx-8">
                                <Image src="/assets/home/user.png" width={30} height={30} alt="heart" />
                            </Link>
                            <Link href="#" class="">
                                <Image src="/assets/home/bag.png" width={30} height={30} alt="heart" />
                            </Link>
                            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                                <li>
                                    <Link href="/" class="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer rounded f-18 proxima-regular" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular">about</Link>
                                </li>
                                <li>
                                    <Link href="/products" class="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular">shop now</Link>
                                </li>
                                <li>
                                    <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular">contact us</Link>
                                </li>
                                <li>
                                    <Link href="#" class="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular">donate a ration box</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        </div>
    )
}