import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
import Otpinput from "./pages/Otpinput";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import AdminLayout from "./pages/AdminLayout";
import AddProduct from "./pages/AddProduct"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Otpinput" element={<Otpinput />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
          <Route element={<AdminLayout/>}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/products" element={<Products />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/addproduct" element={<AddProduct/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
