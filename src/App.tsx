import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>

      {/* <footer>FOOTER</footer> */}
    </div>
  );
}

export default App;
