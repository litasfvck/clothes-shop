import { createContext } from "react";
import { ProductsContextProps, ProductsStateContextProps } from "./types";

export const initialState: ProductsStateContextProps = {
  products: [],
  loading: true,
};

export const ProductsStore = createContext<ProductsContextProps>({
  ...initialState,
  dispatch: () => {},
});
