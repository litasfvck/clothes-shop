import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './scss/app.scss';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';
import Product from './pages/Product';
import { ProductContext, initialState } from './store/ProductStore/store';
import { useCustomState } from './hooks/useCustomState';
import { ProductContextProps } from './types';
import { useMemo } from 'react';

function App() {
  const [state, dispatch] = useCustomState<ProductContextProps>({
    ...initialState,
    dispatch: () => {},
  });

  const context = useMemo<ProductContextProps>(
    () => ({ ...state, dispatch }),
    [state, dispatch]
  );

  return (
    <ProductContext.Provider value={context}>
      <div className='container'>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/product' element={<Product />} />
        </Routes>

        {/* <footer>FOOTER</footer> */}
      </div>
    </ProductContext.Provider>
  );
}

export default App;
