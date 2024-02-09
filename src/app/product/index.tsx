import style from "./index.module.css";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import { useProduct } from "../../hooks/useProduct";

function Index() {
  const { id } = useParams<{
    id: string;
  }>();
  const { findProductByID, handlerAddToCart } = useProduct();
  const product = findProductByID(id ? +id : 0);
  return (
    <div className={style.container}>
      <div className={style.container__img}>
        <img
          src={product?.img}
          alt="product"
          className={style.container__img__img}
        />
      </div>
      <div className={style.container__info}>
        <h1 className={style.container__info__title}>{product?.name}</h1>
        <p className={style.container__info__description}>
          {product?.description}
        </p>
        <p className={style.container__info__price}>Price ${product?.cost}</p>
        <div className={style.container__info__ingredients}>
          <label className={style.container__info__ingredients__title}>
            Ingredients
          </label>
          <ul className={style.container__info__ingredients__list}>
            {product?.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className={style.container__info__ingredients__list__item}
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.container__button}>
          <Button onClick={() => handlerAddToCart(product?.id as number)}>
            add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
