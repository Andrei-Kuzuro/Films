import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Error } from "../components/Error/Error";
import { HomePage } from "../components/HomePage/HomePage";
import { Top250Movies } from "../components/Movies/Top250Movies/Top250Movies";
import { MostPopularMovies } from "../components/Movies/MostPopularMovies/MostPopularMovies";
import { Top250TVs } from "../components/Movies/Top250TVs/Top250TVs";
import { MostPopularTVs } from "../components/Movies/MostPopularTVs/MostPopularTVs";
import { DescriptionFilms } from "../components/DescriptionFilms/DescriptionFilms";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/top250movies" component={Top250Movies} exact />
        <Route path="/top250tvs" component={Top250TVs} exact />
        <Route path="/mostpopularmovies" component={MostPopularMovies} exact />
        <Route path="/mostpopulartvs" component={MostPopularTVs} exact />
        <Route path="/movie/:id" component={DescriptionFilms} exact />
        <Route component={Error} exact />
      </Switch>
    </BrowserRouter>
  );
};
