import { useEffect, useState, useContext } from 'react';
import { IProduct } from '../types';
import axios, { AxiosError } from 'axios';
import { ProductContext } from '../store/ProductStore/store';

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { products, dispatch } = useContext(ProductContext);

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const { data } = await axios.get<IProduct[]>(
        'https://652c1176d0d1df5273ef1c48.mockapi.io/items'
      );
      dispatch({ products: data });
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading };
};
