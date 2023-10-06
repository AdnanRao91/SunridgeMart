import ContactFooter from '@/components/ContactFooter';
import { Divider } from "@mui/material"
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Footer() {
    const router = useRouter()
    const { pathname } = router
    return (
        <>
            <div style={{
                backgroundImage: pathname !== "/" ? "none" : "url(/assets/home//Untitled-1.png)"
            }} className="footer-sunridge">
                {
                    pathname == "/" && <div className='lg:px-20'>
                        <ContactFooter />
                    </div>
                }

                <footer className='br-light-grey pt-12 mt-10' style={{ opacity: '0.8' }}>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-4 px-20 sm:px-8 xs:px-8 pb-8'>
                        <div className='col-span-1'>
                            <div className='f-24 nova-bold black-text'>QUICK LINKS</div>
                            <ul className='list-footer'>
                                <li>
                                    <Link href="/about-us">
                                    About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us">Contact US</Link>
                                </li>
                                <li>
                                    <Link href="/products">Product</Link>
                                </li>
                                <li>
                                    <Link href="#">Faqs</Link>
                                </li>
                                <li>
                                    <Link href="#">Exchange Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-1'>
                            <div className='f-24 nova-bold black-text'>INFORMATION</div>
                            <ul className='list-footer'>
                                <li>
                                   <Link href="/wish-list">My Wishlist</Link>
                                </li>
                                <li>
                                   <Link href="/cart-page">My Cart</Link>
                                </li>
                                <li>
                                    <Link href="/check-out">Check Out</Link>
                                </li>
                                <li>
                                    <Link href="#">Order History</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-1'>
                            <div className='f-24 nova-bold black-text'>MY ACCOUNT</div>
                            <ul className='list-footer'>
                                <li>
                                    <Link href="#">MY ACCOUNT</Link>
                                </li>
                                <li>
                                    <Link href="/login">Sign In</Link>
                                </li>
                                <li>
                                    <Link href="/register">Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-1'>
                            <div className='f-24 nova-bold black-text'>Follow Us</div>
                            <ul className='list-footer'>
                                <li>
                                    <div className="flex items-center">
                                        <img src="/assets/home/fb.png" className="image-contact me-4" />
                                        <div className="f-18 text-light-black proxima-regular">
                                            Facebook
                                        </div>
                                    </div>
                                </li>
                                <li className='my-3'>
                                    <div className="flex items-center">
                                        <img src="/assets/home/linkedin.png" className="image-contact me-4" />
                                        <div className="f-18 text-light-black proxima-regular">
                                            LinkedIn
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <img src="/assets/home/twitter.png" className="image-contact me-4" />
                                        <div className="f-18 text-light-black proxima-regular">
                                            Twitter
                                        </div>
                                    </div>
                                </li>
                                <li className='my-3'>
                                    <div className="flex items-center">
                                        <img src="/assets/home/instagram.png" className="image-contact me-4" />
                                        <div className="f-18 text-light-black proxima-regular">
                                            Instagram
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-20 sm:px-8 xs:px-8'>
                        <Divider />
                        <div className='text-center f-18 text-light-black proxima-regular py-4'>
                            © Copyright 2023 Sunridge Foods Pvt Ltd.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
