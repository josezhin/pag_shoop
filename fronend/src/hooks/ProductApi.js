import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/'; // Reemplaza esta URL con la URL real de tu API

export const fetchProduct = async () => {
    try {
      const response = await axios.get(API_URL);
      const responseData = response.data;

      if (Array.isArray(responseData.results)) {
        return responseData.results; // Retorna el array de productos
      } else {
        throw new Error('Los datos obtenidos de la API no tienen la estructura esperada');
      }
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
      throw error;
    }
  };
  
