import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bulma/css/bulma.css"
import ProductList from "./components/ProductList";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
