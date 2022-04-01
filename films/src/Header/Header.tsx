import { NavBar } from "../components/NavBar/NavBar";
import styles from "./Header.module.css";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  return (
    <>
      <div className={styles.header}>
        <p className={styles.text} onClick={() => history.push("/")}>
          TMS Films
        </p>
        <NavBar />
      </div>
    </>
  );
};
