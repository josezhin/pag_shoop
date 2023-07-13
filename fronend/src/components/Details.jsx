// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { fetchData } from "./../api/ProductDetailsApi";
// import { DetailsCart } from './../components/product/DetailsCart';

// export const Details = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const data = await fetchData(id);
//       setProduct(data);
//       console.log(data);
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-wrap justify-center pt-10">
//       {product.map(item => (
//         <DetailsCart key={item.id} product={item} />
//       ))}
//     </div>
//   );
// };
