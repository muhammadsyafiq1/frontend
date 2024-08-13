import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bulma/css/bulma.css"
import ProductList from "./components/ProductList";
import AddProduct from "./components/addProduct";
import EditProduct from "./components/editProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
