import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addToCart, removeFromCart } from "../store/product.reducer";

export const useCart = () => {
  const cart = useSelector((state: RootState) => state.product.cart);
  const dispatch = useDispatch();
  const handlerAddToCart = (item: number) => {
    dispatch(addToCart(item));
  };
  const handlerRemoveFromCart = (item: number) => {
    dispatch(removeFromCart(item));
  };

  return { cart, handlerAddToCart, handlerRemoveFromCart };
};
