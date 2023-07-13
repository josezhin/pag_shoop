import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProduct } from '../api/ProductApi';
import ProductCart from './../components/product/ProductCart'
import { Blog } from './../components/CarruselBorrar'
//import fetch from 'node-fetch';

export const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const jsonData = await fetchProduct();
        setProduct(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error al obtener los datos:", error)

      }
    };
    getProduct();
  }, []);

  return (
    <div className="flex flex-wrap justify-center pt-10">
      {product.map(item => (
        <ProductCart key={item.id} product={item} />
      ))}
      <Blog/>
    </div>
  );
};