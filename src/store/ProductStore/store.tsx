import { createContext } from 'react';
import { ProductContextProps } from '../../types';

const initialState = {
  products: [],
  product: {
    id: 0,
    image: '',
    title: '',
    price: 0,
    liked: false,
    category: 0,
    brand: '',
  },
  query: '',
  categoryId: undefined,
};

const ProductContext = createContext<ProductContextProps>({
  ...initialState,
  dispatch: () => {},
});

// ========== Собстна редусер)

// const ProductReducer = (prevState: IProduct[], currentState: IProduct[]) => {
//   return { ...prevState, ...currentState };
// };

// ========= Provider

// const ProductProvider = ({ children }: ProductProviderProps) => {

//   const [state, dispatch] = useReducer(ProductReducer, initialState);

//   return (
//     <ProductContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

export { ProductContext, initialState };
