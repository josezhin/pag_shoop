import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

 export const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/product/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          console.log(data);
        } else {
          console.error("Error fetching product:", response.status);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
        {/* <div>
      {product.map(item => (
        <div key={item.id}>{item}</div>
      ))}
    </div> */}
    <div className="relative mx-auto max-w-screen-xl px-4 py-8">
  <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
      <img
        alt="Les Paul"
        src={product.image}
        className="aspect-square w-1px rounded-xl object-cover"
      />

      <div className="grid grid-cols-2 gap-4 lg:mt-4">
        <img
          alt="Les Paul"
          src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="aspect-square w-full rounded-xl object-cover"
        />

        <img
          alt="Les Paul"
          src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="aspect-square w-full rounded-xl object-cover"
        />

        <img
          alt="Les Paul"
          src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="aspect-square w-full rounded-xl object-cover"
        />

        <img
          alt="Les Paul"
          src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="aspect-square w-full rounded-xl object-cover"
        />
      </div>
    </div>

    <div className="sticky top-0">
      <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
        Pre Order
      </strong>

      <div className="mt-8 flex justify-between">
        <p className="text-lg font-bold">${product.price}</p>
      </div>

      <div className="mt-4">
        <div className="prose max-w-none">
          <p>{product.description}</p>
        </div>
      </div>

      <form className="mt-8">
        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
          >
            Add to Cart
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
  )
};