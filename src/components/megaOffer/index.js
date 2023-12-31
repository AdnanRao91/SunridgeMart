export default function MegaOffer(){

return (
    <div>
             <div className="megaOffer-img-background pl-20 sm:pl-8 xs:pl-8">
            <div className="exculsive-section mb-12">
                <div className="lg:flex sm:block grid lg:grid-cols-2 sm:grid-cols-1 items-center">
                    <div className="col-span-1 resp-mega background-exculsive">
                            <div className="mega-offer-headings py-8 f-65 lh-1 nova-bold">
                            <div>Mega Offer</div> 
                            <span className="proxima-regular">Get</span> <span className="proxima-regular text-color-orange">20 %</span> <span className="proxima-regular">Off On </span> <span className="proxima-regular">All The Products</span>
                            </div>
                            <div className="order-now-btn">
                            <button>order now</button>
                           </div>
                    </div>
                    <div className="col-span-1 background-exculsive">
                           <div>
                            <img src="/assets/home/mega-offer.png" className="w-100"/>
                           </div>
                    </div>
                </div>

            </div>
            <div>
            </div>
        </div>
    </div>
)
}