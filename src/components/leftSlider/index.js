
// // import { ThemeProvider } from '@emotion/react';
// // import { useState } from 'react';

// // export default function LeftSlider({initialPrice}){
// //   const [count, setCount] = useState(1);
// //   const [price, totalPrice] = useState(initialPrice)
// //  const priceCalculator = () =>{

// //  }
// //   const handleIncrement = () => {
// //     setCount(count+1)
// //     totalPrice(initialPrice * (count + 1))
// //   };

// //   const handleDecrement = () => {
// //     if (count > 0) {
// //       setCount(count-1)
// //       totalPrice(initialPrice * (count - 1))
// //     }
// //   };
// // return(
// //     <>
// //      <div className="flex">
// //       {/* Left Sidebar */}
// //       <aside className="w-1/4 bg-gray-200 p-4">
// //         {/* Sidebar Content */}
// //         <div className="mb-4">
// //           <h2 className="text-lg font-semibold">Categories</h2>
// //           <ul className="mt-2">
// //             <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 1</li>
// //             <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 2</li>
// //             {/* Add more categories as needed */}
// //           </ul>
// //         </div>
// //       </aside>

// //       {/* Product Listings */}
// //       <main className="w-3/4 p-4">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {/* Product Cards go here */}
// //           <div className="bg-white p-4 shadow-md rounded-lg">
// //             {/* Product Content */}
// //             <h3 className="text-lg font-semibold">Product Name</h3>
// //             <p className="text-gray-600">Product Description</p>
// //             <span className="text-blue-500 font-semibold">$99.99</span>
// //             <p>Quantity: {price}</p>
// //       <p>Total Price: ${totalPrice.toFixed(2)}</p>
// //             <div>
// //       <button onClick={handleIncrement}>+</button>
// //       <span>{count}</span>
// //       <button onClick={handleDecrement}>-</button>
// //     </div>
// //           </div>
// //           <div className="bg-white p-4 shadow-md rounded-lg">
// //             {/* Product Content */}
// //             <h3 className="text-lg font-semibold">Product Name</h3>
// //             <p className="text-gray-600">Product Description</p>
// //             <span className="text-blue-500 font-semibold">$99.99</span>
// //           </div>
// //           <div className="bg-white p-4 shadow-md rounded-lg">
// //             {/* Product Content */}
// //             <h3 className="text-lg font-semibold">Product Name</h3>
// //             <p className="text-gray-600">Product Description</p>
// //             <span className="text-blue-500 font-semibold">$99.99</span>
// //           </div>
// //           {/* Add more product cards as needed */}
// //         </div>
// //       </main>
// //     </div>
// //     </>
// // )
// // }

// import { ThemeProvider } from '@emotion/react';
// import { useState } from 'react';

// export default function LeftSlider({ initialPrice, initialQuantity }) {
//   const [count, setCount] = useState(initialQuantity);
//   const [totalPrice, setTotalPrice] = useState(initialPrice);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     setTotalPrice(initialPrice * (count + 1));
//   };

//   const handleDecrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//       setTotalPrice(initialPrice * (count - 1));
//     }
//   };

//   return (
//     <>
//       <div className="flex">
//         {/* Left Sidebar */}
//         <aside className="w-1/4 bg-gray-200 p-4">
//           {/* Sidebar Content */}
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold">Categories</h2>
//             <ul className="mt-2">
//               <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 1</li>
//               <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 2</li>
//               {/* Add more categories as needed */}
//             </ul>
//           </div>
//         </aside>

//         {/* Product Listings */}
//         <main className="w-3/4 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Product Cards go here */}
//             <div className="bg-white p-4 shadow-md rounded-lg">
//               {/* Product Content */}
//               <h3 className="text-lg font-semibold">Product Name</h3>
//               <p className="text-gray-600">Product Description</p>
//               <span className="text-blue-500 font-semibold">$99.99</span>
//               <p>Quantity: {count}</p>
//               <p>Total Price: ${totalPrice.toFixed(2)}</p>
//               <div>
//                 <button onClick={handleIncrement}>+</button>
//                 <span>{count}</span>
//                 <button onClick={handleDecrement}>-</button>
//               </div>
//             </div>
//             <div className="bg-white p-4 shadow-md rounded-lg">
//               {/* Product Content */}
//               <h3 className="text-lg font-semibold">Product Name</h3>
//               <p className="text-gray-600">Product Description</p>
//               <span className="text-blue-500 font-semibold">$99.99</span>
//               <p>Quantity: {count}</p>
//               <p>Total Price: ${totalPrice.toFixed(2)}</p>
//               <div>
//                 <button onClick={handleIncrement}>+</button>
//                 <span>{count}</span>
//                 <button onClick={handleDecrement}>-</button>
//               </div>
//             </div>
//             <div className="bg-white p-4 shadow-md rounded-lg">
//               {/* Product Content */}
//               <h3 className="text-lg font-semibold">Product Name</h3>
//               <p className="text-gray-600">Product Description</p>
//               <span className="text-blue-500 font-semibold">$99.99</span>
//             </div>
//             {/* Add more product cards as needed */}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

// export default function LeftSlider({ initialPrice, initialQuantity }) {
//   const [count, setCount] = useState(initialQuantity);
//   const [totalPrice, setTotalPrice] = useState(initialPrice);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     setTotalPrice(initialPrice * (count + 1));
//   };

//   const handleDecrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//       setTotalPrice(initialPrice * (count - 1));
//     }
//   };

//   return (
//     <>
//       <div className="flex">
//         {/* Left Sidebar */}
//         <aside className="w-1/4 bg-gray-200 p-4">
//           {/* Sidebar Content */}
//           <div className="mb-4">
//             <h2 className="text-lg font-semibold">Categories</h2>
//             <ul className="mt-2">
//               <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 1</li>
//               <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 2</li>
//               {/* Add more categories as needed */}
//             </ul>
//           </div>
//         </aside>

//         {/* Product Listings */}
//         <main className="w-3/4 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Product Cards go here */}
//             <div className="bg-white p-4 shadow-md rounded-lg">
//               {/* Product Content */}
//               <h3 className="text-lg font-semibold">Product Name</h3>
//               <p className="text-gray-600">Product Description</p>
//               <span className="text-blue-500 font-semibold">$99.99</span>
//               <p>Quantity: {count}</p>
//               <p>Total Price: ${totalPrice.toFixed(2)}</p>
//               <div>
//                 <button onClick={handleIncrement}>+</button>
//                 <span>{count}</span>
//                 <button onClick={handleDecrement}>-</button>
//               </div>
//             </div>
//             <div className="bg-white p-4 shadow-md rounded-lg">
//               {/* Product Content */}
//               <h3 className="text-lg font-semibold">Product Name</h3>
//               <p className="text-gray-600">Product Description</p>
//               <span className="text-blue-500 font-semibold">$99.99</span>
//             </div>
//             <div className="bg-white p-4 shadow-md rounded-lg">
//               {/* Product Content */}
//               <h3 className="text-lg font-semibold">Product Name</h3>
//               <p className="text-gray-600">Product Description</p>
//               <span className="text-blue-500 font-semibold">$99.99</span>
//             </div>
//             {/* Add more product cards as needed */}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }
import React from 'react';

const ProductCard = ({ product, onQuantityChange }) => {
  const { id, name, description, price, quantity } = product;

  const handleIncrement = () => {
    onQuantityChange(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  // Calculate the total price for this product based on its quantity
  const totalProductPrice = (price * quantity).toFixed(2);

  return (
    <>
      <div className="flex">
         {/* Left Sidebar */}
         <aside className="w-1/4 bg-gray-200 p-4">
           {/* Sidebar Content */}
           <div className="mb-4">
             <h2 className="text-lg font-semibold">Categories</h2>
             <ul className="mt-2">
               <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 1</li>
               <li className="py-1 px-2 hover:bg-gray-300 cursor-pointer">Category 2</li>
               {/* Add more categories as needed */}
             </ul>
           </div>
         </aside>

         {/* Product Listings */}
         <main className="w-3/4 p-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {/* Product Cards go here */}
             <div className="bg-white p-4 shadow-md rounded-lg">
     {/* Product Content */}
       <h3 className="text-lg font-semibold">{name}</h3>
       <p className="text-gray-600">{description}</p>
       <span className="text-blue-500 font-semibold">${price.toFixed(2)}</span>
       <p>Quantity: {quantity}</p>
       <p>Total Price: ${totalProductPrice}</p>
       <div>
         <button onClick={handleIncrement}>+</button>
         <span>{quantity}</span>
         <button onClick={handleDecrement}>-</button>
       </div>
     </div>
             {/* Add more product cards as needed */}
           </div>
         </main>
       </div>
    </>
     //<div className="bg-white p-4 shadow-md rounded-lg">
    //   {/* Product Content */}
    //   <h3 className="text-lg font-semibold">{name}</h3>
    //   <p className="text-gray-600">{description}</p>
    //   <span className="text-blue-500 font-semibold">${price.toFixed(2)}</span>
    //   <p>Quantity: {quantity}</p>
    //   <p>Total Price: ${totalProductPrice}</p>
    //   <div>
    //     <button onClick={handleIncrement}>+</button>
    //     <span>{quantity}</span>
    //     <button onClick={handleDecrement}>-</button>
    //   </div>
    // </div>
  );
};

export default ProductCard;

