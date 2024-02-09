import style from "./index.module.css";
import CardProduct from "../../components/card-product";
import Input from "../../components/input";
import Select from "../../components/select";
import { useProduct } from "../../hooks/useProduct";

function Index() {
  const { handlerSort, handlerSearch ,listProducts,handlerAddToCart} = useProduct();
  const opt = [
    {
      value: "asc",
      label: "Asc",
    },
    {
      value: "desc",
      label: "Desc",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.container__title}>
        <h2 className={style.title}>Menu of the week</h2>
      </div>
      <div className={style.container__search}>
        <Input
          label="Search baguette"
          type="text"
          placeholder="Search baguette"
          onChange={(e) => handlerSearch(e.target.value)}
        ></Input>
        <Select
          label="Sort by price"
          options={opt}
          onChange={(e) => handlerSort(e.target.value)}
        ></Select>
      </div>
      <div className={style.container__products}>
        {listProducts.map((baguette) => (
          <CardProduct
            key={baguette.id}
            name={baguette.name}
            price={baguette.cost}
            img={baguette.img}
            stock={baguette.stock}
            isTopSell={baguette.isTopSell}
            id={String(baguette.id)}
            action={handlerAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
