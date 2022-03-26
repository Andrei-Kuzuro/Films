import { BrowserRouter, Route, Switch } from "react-router-dom";
import { List } from "../components/List/List";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={List} />
      </Switch>
    </BrowserRouter>
  );
};
