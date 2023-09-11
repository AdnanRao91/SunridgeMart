import React, { useState } from "react";

export default function Products({tabs, product}){
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
      <div className="tab-content flex">
          {product.map((data, index) => (
            <div key={index}>
              <div className="product-image-box">
                <img src={data.imageUrl} className="product-main-image" />
              </div>
              <div>{data.price}</div>
            </div>
          ))}
        </div>
      {/* <div className="tab-content">
        {tabs[activeTab].content.image}
      </div> */}
    </div>
    </div>
    )
}