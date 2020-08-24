import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NewspaperList from "./components/NewspaperList";
import IssueList from "./components/IssueList";
import PageList from "./components/PageList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/paper/:id/issue/:issueId"
          render={(props) => {
            return (
              <Header>
                <PageList {...props} />
              </Header>
            );
          }}
        ></Route>

        <Route
          path="/paper/:id"
          render={(props) => {
            return (
              <Header>
                <IssueList {...props} />
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
