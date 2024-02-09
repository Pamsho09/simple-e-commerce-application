import style from "./index.module.css";
import { Link } from "react-router-dom";

function Index() {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header__title}>
        Eat and cheers
      </Link>
      <Link to="/product-form" className={style.header__title}>
        Add products
      </Link>
      <Link to="/cart" className={style.header__cart}>
        <img src="/icons/cart.svg" alt="cart" className={style.header__cart} />
      </Link>
    </header>
  );
}

export default Index;
