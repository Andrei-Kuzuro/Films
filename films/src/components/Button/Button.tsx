import styles from "./Button.module.css";

interface IButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
