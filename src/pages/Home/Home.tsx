import { FC, useContext, useEffect, useState } from "react";
import Categories from "../../components/Categories";
import ProductBlock from "../../components/ProductBlock";
import axios, { AxiosError } from "axios";
import { IProduct } from "../../types";
import { ProductsStore } from "../../store/store";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  //заменяем локальный стейт на глобал из контекста
  //const [products, setProducts] = useState<IProduct[]>([]);

  //const [loading, setLoading] = useState(true);
  const { products, loading, dispatch } = useContext(ProductsStore);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    //плохая реализация так как мы явно не хотим показывать пользователю какая ошибка у нас выпала )

    try {
      setError("");

      const { data } = await axios.get<IProduct[]>(
        "https://652c1176d0d1df5273ef1c48.mockapi.io/items"
      );
      dispatch({ loading: false, products: data });
    } catch (e: unknown) {
      const error = e as AxiosError;
      dispatch({ loading: false });
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div className="aside-title">
        <h1>ATSOS</h1>
        <h2>Его designs могут носить люди любого shape, size</h2>
        <h3>Смотря какой fabric</h3>
      </div>

      <Categories />

      <section>
        {loading && <p>Loading ... </p>}
        {error && <p>{error}</p>}
        <div className="wrapper-products">
          {products.map((p, index) => (
            <ProductBlock product={p} key={index} />
          ))}
        </div>
      </section>

      {/* <aside>aside2</aside> */}
    </main>
  );
};

export default Home;
