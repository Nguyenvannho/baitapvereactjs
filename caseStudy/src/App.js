// import logo from "./logo.svg";
import "./App.css";
// import ProductDetails from "./pages/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from './pages/Login';
import SanPhamShow from './pages/SanPhamShow';
import Shop from './pages/Shop';
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import { Provider } from 'react-redux';
import store from './redux/store';
import Register from "./pages/Register";



function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/shop" element={<Shop/>} />
        {/* <Route path="/ProductDetail/:id" element={<ProductDetail/>} /> */}
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/sanpham/:id" element={<SanPhamShow/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
  </Provider>
    </>

  );
}

export default App;