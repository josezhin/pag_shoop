import { useParams } from 'react-router-dom';
import axios from 'axios';

export const fetchData = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/product/${id}/`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error fetching product:", response.status);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};