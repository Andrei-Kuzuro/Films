import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Error } from "../components/Error/Error";
import { HomePage } from "../components/HomePage/HomePage";
import { Top250Movies } from "../components/Movies/Top250Movies/Top250Movies";
import { MostPopularMovies } from "../components/Movies/MostPopularMovies/MostPopularMovies";
import { Top250TVs } from "../components/Movies/Top250TVs/Top250TVs";
import { MostPopularTVs } from "../components/Movies/MostPopularTVs/MostPopularTVs";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/Top250Movies" component={Top250Movies} exact />
        <Route path="/Top250TVs" component={Top250TVs} exact />
        <Route path="/MostPopularMovies" component={MostPopularMovies} exact />
        <Route path="/MostPopularTVs" component={MostPopularTVs} exact />

        <Route path="*" component={Error} exact />
      </Switch>
    </BrowserRouter>
  );
};
