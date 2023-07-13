import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header'
import Home from "./pages/Home";
import { Product } from './pages/Product';
import {Details} from './components/product/DetailsProduct';
import { NotFound } from "./pages/NotFound";

const App = () => {

  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App
