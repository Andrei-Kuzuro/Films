import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/top250movies" exact className={styles.link}>
        <p className={styles.text}>Top 250 Movies</p>
      </NavLink>
      <NavLink to="/top250tvs" exact className={styles.link}>
        <p className={styles.text}> Top 250 TVs</p>
      </NavLink>
      <NavLink to="/mostpopularmovies" exact className={styles.link}>
        <p className={styles.text}> Most Popular Movies</p>
      </NavLink>
      <NavLink to="/mostpopulartvs" exact className={styles.link}>
        <p className={styles.text}> Most Popular TVs</p>
      </NavLink>
    </div>
  );
};
