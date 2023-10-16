import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './scss/app.scss';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Favourite from './pages/Favourite';
import Product from './pages/Product';

function App() {
  return (
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
  );
}

export default App;
