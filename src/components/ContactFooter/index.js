import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function ContactFooter() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <>
        <div className="grid grid-cols-2 pt-20">
            <div className="col-span-1 contact-us-form">
                <div className="contact-us bg-grey  p-4 my-20">
                    <div className="contact-heading uppercase black-text f-50 nova-bold">
                        GET IN TOUCH
                    </div>
                    <div className="f-18 proxima-regular text-light-black">
                    Have questions, feedback, or inquiries? Feel free to reach out to us.
                    </div>
                    <div className="sign-up f-24 black-text proxima-regular pt-8">
                    SIGN UP FOR OUR NEWSLETTER
                    </div>
                    <div className="flex">
                    <input type="email" name="email" class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-3/4 inputField" placeholder="Enter your Email" />
                    <button className="bg-light-orange btn-sign-up">
                        <img src="/assets/home/send.png" />
                    </button>
                    </div>
                    <div className="py-12">
                        <div className="flex">
                            <img src="/assets/home/map.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            Shop # 6, 7 & 8, Tai Roshan Residency P.E.C.H.S. Block 2, Allama Iqbal Road, Karachi, Pakistan
                            </div>
                        </div>
                        <div className="flex my-4">
                            <img src="/assets/home/mail.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            info@sunridgefoods.com
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/assets/home/phone-call.png" className="image-contact me-4"/>
                            <div className="f-14 text-light-black proxima-regular">
                            0800 Unity(86489)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
            <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
            </div>
        </div>
        </>
    )
}