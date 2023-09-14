import ContactFooter from '@/components/ContactFooter';
import { Divider } from "@mui/material"

export default function Footer(){
    return(
        <>
        <div className="pt-20 footer-sunridge">
            <div className='px-20'>
        <ContactFooter />
        </div>
        <footer className='br-light-grey pt-12 mt-10' style={{opacity: '0.8'}}>
            <div className='grid grid-cols-4 gap-4 px-20 pb-8'>
                <div className='col-span-1'>
                <div className='f-24 nova-bold black-text'>QUICK LINKS</div>
                <ul className='list-footer'>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Product</li>
                    <li>Faqs</li>
                    <li>Exchange Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                <div className='col-span-1'>
                <div className='f-24 nova-bold black-text'>INFORMATION</div>
                <ul className='list-footer'>
                    <li>My Wishlist</li>
                    <li>My Cart </li>
                    <li>Check Out</li>
                    <li>Order History</li>
                </ul>
                </div>
                <div className='col-span-1'>
                <div className='f-24 nova-bold black-text'>MY ACCOUNT</div>
                <ul className='list-footer'>
                    <li>MY ACCOUNT</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
                </div>
                <div className='col-span-1'>
                <div className='f-24 nova-bold black-text'>QUICK LINKS</div>
                <ul className='list-footer'>
                    <li>
                    <div className="flex items-center">
                            <img src="/assets/home/fb.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            Facebook
                            </div>
                        </div>
                    </li>
                    <li className='my-3'>
                    <div className="flex items-center">
                            <img src="/assets/home/linkedin.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            LinkedIn
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="flex items-center">
                            <img src="/assets/home/twitter.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            Twitter
                            </div>
                        </div>
                    </li>
                    <li className='my-3'>
                    <div className="flex items-center">
                            <img src="/assets/home/instagram.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            Instagram
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <div className='px-20'>
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
