import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NewspaperList from "./components/NewspaperList";
import NewsPaper from "./components/NewsPaper";
import NewsPaperv2 from "./components/NewsPaperv2";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/paper/:id"
          render={(props) => {
            return (
              <Header>
                <NewsPaperv2 {...props} />
              </Header>
            );
          }}
        ></Route>

        <Route path="/">
          <Header>
            <NewspaperList />
          </Header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
