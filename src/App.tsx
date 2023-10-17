import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Favourite from "./pages/Favourite";
import Product from "./pages/Product";
import { ProductsStore, initialState } from "./store/store";
import { ProductsContextProps } from "./store/types";
import { useCustomState } from "./hooks";
import { useMemo } from "react";

function App() {
  const [state, dispatch] = useCustomState<ProductsContextProps>({
    ...initialState,
    dispatch: () => {},
  });

  const context = useMemo<ProductsContextProps>(
    () => ({ ...state, dispatch }),
    [state, dispatch]
  );
  return (
    <ProductsStore.Provider value={context}>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/product" element={<Product />} />
        </Routes>

        {/* <footer>FOOTER</footer> */}
      </div>
    </ProductsStore.Provider>
  );
}

export default App;
