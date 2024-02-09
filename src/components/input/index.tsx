import React from "react";
import style from "./index.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name?: string;
  value?: string;
}
function Input(props: InputProps) {
  return (
    <div className={style.container__input}>
      <label className={style.input__label}>{props.label}</label>
      <input
        name={props.name || ""}
        className={style.input__input}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      {props.error && <span className={style.input__error}>{props.error}</span>}
    </div>
  );
}

export default Input;
