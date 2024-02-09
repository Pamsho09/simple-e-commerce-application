import style from "./index.module.css";
import Button from "../../components/button";
import { useProduct } from "../../hooks/useProduct";
import { useCart } from "../../hooks/useCart";

function Index() {
  const { findProductByID } = useProduct();
  const { cart,handlerAddToCart,handlerRemoveFromCart } = useCart();
  return (
    <div className={style.container}>
      <div className={style.cart}>
        {cart.map((item, index) => (
          <div key={index} className={style.cart__item}>
            <img
              src={findProductByID(item.id)?.img}
              alt="baguette"
              className={style.cart__item__img}
            />
            <div className={style.cart__item__info__container}>
              <div className={style.cart__item__info}>
                <p className={style.cart__item__info__name}>{findProductByID(item.id)?.name}</p>
                <p className={style.cart__item__info__price}>${findProductByID(item.id)?.cost}</p>
              </div>
              <div className={style.cart__item__info__quantity}>
                <button className={style.cart__item__info__quantity__button} onClick={
                    ()=>handlerRemoveFromCart(item.id)
                    
                }>
                  -
                </button>
                <span className={style.cart__item__info__quantity__quantity}>
                  {item.quantity}
                </span>
                <button className={style.cart__item__info__quantity__button} onClick={
                    ()=>handlerAddToCart(item.id)
                
                }>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.total}>{`Total: $${cart.reduce((acc, item) => {
        const product = findProductByID(item.id);
        if (product) {
          acc += product.cost * item.quantity;
        }
        return acc;
      }, 0).toFixed(2)}`}</div>
      <div className={style.container__button}>
        <Button onClick={() => null}>Checkout</Button>
      </div>
    </div>
  );
}

export default Index;
