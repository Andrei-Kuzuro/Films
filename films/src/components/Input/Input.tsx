import { ChangeEventHandler, KeyboardEventHandler } from "react";
import styles from "./Input.module.css";

interface IInput {
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

export const Input = ({ type, value, onChange, onKeyDown }: IInput) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      placeholder={"Найди фильм, сериал, персону..."}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
