import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function ProductCart({ product }) {
    return (

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-2 border-opacity-0">
            <Link href="#">
                <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <div href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <BsStarFill className="w-5 h-5 text-yellow-300" />
                    <BsStarFill className="w-5 h-5 text-yellow-300" />
                    <BsStarFill className="w-5 h-5 text-yellow-300" />
                    <BsStarFill className="w-5 h-5 text-yellow-300" />
                    <BsStarFill className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                    <Link to={"/products/" + product.id} className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Details</Link>
                </div>
            </div>
        </div>

    )
}

export default ProductCart