import Button from "../button";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";
import style from "./index.module.css";
interface CardProductProps {
  name: string;
  price: number;
  img: string;
  stock: number;
  isTopSell: boolean;
  id: string;
  action: (id: number) => void;
}
function CardProduct({
  name,
  price,
  img,
  stock,
  isTopSell,
  id,
  action,
}: CardProductProps) {
  return (
    <div className={style.container__card}>
      {isTopSell && (
        <div className={style.container__card__topSell}>top sell</div>
      )}
      <AnimatedLink to={`/product/${id}`}>
        <img src={img} alt="cart" className={style.container__card__img__img} />

        {stock === 0 && (
          <div className={style.container__card__img__stock}>out of stock</div>
        )}
      </AnimatedLink>

      <h4 className={style.container__card__title}>{name}</h4>
      <div className={style.container__card__info}>
        <div className={style.container__card__info__price}>
          <h3 className={style.container__card__price}>Price</h3>
          <p className={style.container__card__price__price}>${price}</p>
        </div>
        <div className={style.container__card__info__button}>
          <Button onClick={() => action(+id)}>add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;

export const AnimatedLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      className={style.container__card__img}
      onClick={(ev) => {
        ev.preventDefault();
        document.startViewTransition(() => {
          flushSync(() => {
            navigate(to);
          });
        });
      }}
    >
      {children}
    </a>
  );
};
