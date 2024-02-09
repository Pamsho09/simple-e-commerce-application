import React from "react";
import style from "./index.module.css";
interface ISelectProps {
  options: Array<{ value: string; label: string }>;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Index = ({ options, label, onChange }: ISelectProps) => {
  return (
    <div className={style.container__select}>
      <label className={style.select__label}>{label}</label>
      <select
        onChange={onChange}
        className={style.select__select}
      >
        <option value="" className={style.select__option}>
          Select an option
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className={style.select__option}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Index;
