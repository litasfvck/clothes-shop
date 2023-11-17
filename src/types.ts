export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  liked: boolean;
  category: number;
  brand: string;
}

export type initialStateProps = {
  products: IProduct[];
  product: IProduct;
  query: string;
  categoryId: number | undefined;
};

export type ProductContextDispatchProps = {
  dispatch: (state: Partial<initialStateProps>) => void;
};

export type ProductContextProps = initialStateProps &
  ProductContextDispatchProps;

export type ProductProviderProps = {
  children: React.ReactNode;
};
