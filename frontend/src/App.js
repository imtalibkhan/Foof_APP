import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/Cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymnetsuccess.scss";
import "./styles/login.scss";






import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Confirmorder from "./components/cart/Confirmorder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";





function App() {
  return (
    <Router>
      < Header />
     
    <Routes>
    


      <Route path ="/" element={<Home />} />
      <Route path ="/contact" element={<Contact />} />
      <Route path ="/cart" element={<Cart />} />
      <Route path ="/shipping" element={<Shipping />} />
      <Route path ="/confirmorder" element={<Confirmorder />} />
      <Route path ="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path ="/login" element={<Login />} />






    </Routes>

    <Footer/>
  </Router>

  )
  
}

export default App;
