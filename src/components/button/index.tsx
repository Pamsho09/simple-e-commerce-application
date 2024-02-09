import style from "./index.module.css";
interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={style.container__button}
      onClick={
        props.type === "submit" || props.type === "reset"
          ? () => {}
          : props?.onClick
      }
      type={
        props.type === "button" ||
        props.type === "submit" ||
        props.type === "reset"
          ? props.type
          : "button"
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
