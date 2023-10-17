import { IProduct } from "../types";

export type ProductsStateContextProps = {
  // при необходимости можно расширять данный контекст
  products: IProduct[];
  loading: boolean;
};
export type ProductsContextDispatchProps = {
  dispatch: (state: Partial<ProductsStateContextProps>) => void;
};
export type ProductsContextProps = ProductsStateContextProps &
  ProductsContextDispatchProps;
