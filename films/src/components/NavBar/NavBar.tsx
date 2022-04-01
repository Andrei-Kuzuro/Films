import { NavLink, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <NavLink
        to="/Top250Movies"
        exact
        className={styles.link}
        onClick={() => {
          history.push("/Top250Movies");
        }}
      >
        <p className={styles.text}>Top 250 Movies</p>
      </NavLink>
      <NavLink
        to="/Top250TVs"
        exact
        className={styles.link}
        onClick={() => {
          history.push("/Top250TVs");
        }}
      >
        <p className={styles.text}> Top 250 TVs</p>
      </NavLink>
      <NavLink
        to="/MostPopularMovies"
        exact
        className={styles.link}
        onClick={() => {
          history.push("/MostPopularMovies");
        }}
      >
        <p className={styles.text}> Most Popular Movies</p>
      </NavLink>
      <NavLink
        to="/MostPopularTVs"
        exact
        className={styles.link}
        onClick={() => {
          history.push("/MostPopularTVs");
        }}
      >
        <p className={styles.text}> Most Popular TVs</p>
      </NavLink>
    </div>
  );
};
