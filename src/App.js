import React from "react";
import { Route, Switch } from "react-router-dom";

import { CharacterPage, CharactersPage } from "screens";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CharactersPage} />\
        <Route exact path="/characters/:id" component={CharacterPage} />
      </Switch>
    </div>
  );
}

export default App;
