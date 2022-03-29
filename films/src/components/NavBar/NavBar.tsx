import { NavLink } from "react-router-dom";
import { MostPopularTVs } from "../MostPopularTVs/MostPopularTVs";

export const NavBar = () => {
  return (
    <div>
      <NavLink to="/" exact>
        Top 250 Movies
      </NavLink>
      <NavLink to="/Top250TVs" exact>
        Top 250 TVs
      </NavLink>
      <NavLink to="/MostPopularMovies" exact>
        Most Popular Movies
      </NavLink>
      <NavLink to="/MostPopularTVs" component={MostPopularTVs} exact>
        Most Popular TVs
      </NavLink>
    </div>
  );
};
