import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bulma/css/bulma.css"
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
