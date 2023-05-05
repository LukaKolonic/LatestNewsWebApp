import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from "./page/Homepage";
import CategoryPage from "./page/CategoryPage";



function App() {
  return (
  <div>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/:categoryName" component={Homepage} />
      </Switch>
  </div>
     
  );
}

export default App;

