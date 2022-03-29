import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top250Movies } from "../components/Top250Movies/Top250Movies";
import { Top250TVs } from "../components/Top250TVs/Top250TVs";
import { MostPopularMovies } from "../components/MostPopularMovies/MostPopularMovies";
import { MostPopularTVs } from "../components/MostPopularTVs/MostPopularTVs";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Top250Movies} exact />
        <Route path="/Top250TVs" component={Top250TVs} exact />
        <Route path="/MostPopularMovies" component={MostPopularMovies} exact />
        <Route path="/MostPopularTVs" component={MostPopularTVs} exact />
      </Switch>
    </BrowserRouter>
  );
};
