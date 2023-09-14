import React, { useState } from "react";
import Image from "next/image";
export default function Products({tabs, data}){
    const [activeTab, setActiveTab] = useState(0);
    return(
        <div className="product-img-background px-20">
        <div className="exculsive-section my-12">
            <div className="grid">
                <div className="col-span-6 background-exculsive">
                    <div className="text-center relative">
                        <div className="flex justify-center items-center">
                            <img src="/assets/home/image-leave.png" />
                        </div>
                        <div className="ineer-page-heading exculsive-deals">
                        PRODUCT CATEGORIES
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div>
        </div>
        <div className="tabs">
      <ul className="tab-list flex text-center justify-between gap-4">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            <img src={tab.image}  className="tab-image"/>
           <div className="f-14 black-text my-4">{tab.name}</div> 
          </li>
        ))}
      </ul>
      {/* <div className="tab-content flex">
          {product.map((data, index) => (
            <div key={index}>
              <div className="product-image-box">
                <img src={data.imageUrl} className="product-main-image" />
              </div>
              <div>{data.price}</div>
            </div>
          ))}
        </div> */}
          <div className="product-card-container">
            <div className="product-image">
                <Image src={data.image} width={94} height={147} style={{ margin: "0 auto", objectFit: "cover" }} />
                <div className='discount-container'>
                    <h2 className='f-16 proxima-regular text-white'>{data.discount}%</h2>
                </div>
            </div>
            <div className='content-container'>
                <h3 className='f-14 proxima-regular text-light-black'>{data.category.title}</h3>
                <h3 className='f-18 nova-bold text-light-black mt-1'>{data.title}</h3>
                <div className='flex justify-center gap-2 items-center mt-1'>
                    <Image src="/assets/home/star.png" width={20} height={18} />
                    <h3 className='josefin-sans-regular f-16'>{data.rating}</h3>
                </div>
                <div className='flex justify-between mt-2'>
                    <h3 className='text-color-orange josefin-sans-bold f-18'>PKR{data.price}</h3>
                    <h3 className='text-light-black josefin-sans-regular f-18 line-through'>PKR 640</h3>
                </div>
                <div className='flex justify-center gap-3 items-center mt-2'>
                    <div className='icon-container'>
                        <Image src="/assets/home/heart.png" width={20} height={20} />
                    </div>
                    <div className='icon-container'>
                        <Image src="/assets/home/bag.png" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
      {/* <div className="tab-content">
        {tabs[activeTab].content.image}
      </div> */}
    </div>
    </div>
    )
}