import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/product/'; // Reemplaza esta URL con la URL real de tu API

export const fetchProduct = async () => {
    try {
      const response = await axios.get(API_URL);
      const responseData = response.data;
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
      throw error;
    }
  };
  