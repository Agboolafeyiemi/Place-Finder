import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import userpage from "./userPage";
import Wronquery from "./Wrongquery";
import myFavuorites from "./FavouritesPlaces"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/wronquery/" component={Wronquery} />
      <Route path="/userPage/" component={userpage} />
      <Route path= "/favouritePage/" component={myFavuorites}/>
      
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
