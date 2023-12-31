import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TokenStorage } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCart } from "@/store/slices/Cart";
import { handleGetWishlist } from "@/store/slices/Wishlist"
export default function Header() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state?.Cart?.cartItems);
    const wishlist = useSelector((state) => state?.Wishlist?.wishlistItems);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleStorage = new TokenStorage
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        dispatch(handleGetCart(handleStorage.getGuid()))
        dispatch(handleGetWishlist(handleStorage.getGuid()))
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
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center">
                            <Image src="/assets/home/logo.png" width={164} height={139} className="logo-sunridge-image" alt="Sunridge Logo" />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link href="/wish-list" className="relative">
                                <Image src="/assets/home/heart.png" width={30} height={30} className="icon-menu-wishlist" alt="heart" />
                                {
                                    wishlist?.length > 0 ?
                                        <div className="number-quantity">
                                            {wishlist?.length}
                                        </div>
                                        :
                                        ""
                                }
                            </Link>
                            <Link href="/login" className="mx-8">
                                <Image src="/assets/home/user.png" width={30} height={30} className="icon-menu-wishlist" alt="heart" />
                            </Link>
                            <Link href="/cart-page" className="relative">
                                <Image src="/assets/home/bag.png" width={30} height={30} className="icon-menu-wishlist" alt="heart" />
                                {
                                    cart?.length > 0 ? (
                                        <div className="number-quantity">
                                            {cart?.length}
                                        </div>
                                    ) :
                                        (
                                            <div></div>
                                        )
                                }
                            </Link>
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="navbar-menu flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                                <li>
                                    <Link href="/" className="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer rounded f-18 proxima-regular nav-link" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular nav-link">about</Link>
                                </li>
                                <li>
                                    <Link href="/products" className="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular nav-link">shop now</Link>
                                </li>
                                <li>
                                    <Link href="contact-us" className="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular nav-link">contact us</Link>
                                </li>
                                <li>
                                    <Link href="/products" className="block py-2 pr-4 pl-3 black-text uppercase cursor-pointer f-18 proxima-regular nav-link">donate a ration box</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        </div>
    )
}