import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/product-image/'; // Reemplaza esta URL con la URL real de tu API

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(API_URL);
      const responseData = response.data;
      console.log(responseData);
      setPosts(responseData);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };

  return (
    <div className="container py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <div className="col mb-4" key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={post.image} alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">{post.description}</p>
              </div>
              <div className="px-6 py-4">
                <a href={`/detail/${post.id}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
