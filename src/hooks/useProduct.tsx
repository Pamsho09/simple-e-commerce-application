import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { useCart } from "./useCart";
import { addProduct } from "../store/product.reducer";

export const useProduct = () => {
  const products = useSelector((state: RootState) => state.product.baggetes);
  const [listProducts, setListProducts] = useState(products);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    search: "",
    sort: "",
  });
  const { handlerAddToCart } = useCart();
  useEffect(() => {
    setListProducts(products);
  }, [products]);

  const handlerSearch = (search: string) => {

    if (search === "") {
      setListProducts(products);
      return;
    }
    const filter = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setListProducts(filter);
  };
  const handlerSort = (sort: string) => {
    const sorted = listProducts.sort((a, b) => {
      if (sort === "asc") {
        return a.cost - b.cost;
      } else {
        return b.cost - a.cost;
      }
    });
    setListProducts([...sorted]);
  };

  const findProductByID = (id: number) => {
    return listProducts.find((product) => product.id === id);
  };
  const handlerCreateProduct = (
    name: string,
    description: string,
    ingredients: string[],
    cost: number,
    img: string
  ) => {
    const newProduct = {
      name,
      description,
      ingredients,
      cost,
      img,
    };
    dispatch(addProduct(newProduct));
  };
  return {
    listProducts,
    form,
    setForm,
    handlerSearch,
    handlerSort,
    handlerAddToCart,
    findProductByID,
    handlerCreateProduct,
  };
};
