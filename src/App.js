import React from "react";
import { Route, Switch } from "react-router-dom";

import { CharacterPage, CharactersPage } from "screens";

import ErrorDialog from "components/common/ErrorDialog";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={CharactersPage} />\
        <Route exact path="/characters/:id" component={CharacterPage} />
      </Switch>

      <ErrorDialog />
    </div>
  );
}

export default App;
