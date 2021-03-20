import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./components/maincard";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notfound";
import SignupPage from "./pages/signup";
import logo from "./logo512.png";
import nf from "./pages/notfound/notfound.png";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App select-none">
      <BrowserRouter>
        <Switch>
          <Route path="/nav">
            <NavBar withSearch />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/component">
            <div className="flex flex-wrap">
              <Card
                active
                name="Jay Prajash Pathak"
                rate="$400/day"
                desc="Some Desctiption lanina Jdnfdsfdf Dfdffdsd Dfsdf Reghf Dfs"
                head={"Best Electrisnn Jamshedpur."}
              />
              <Card
                active
                name="Jay Prajash Pathak"
                rate="$400/day"
                desc="Some Desctiption lanina Jdnfdsfdf Dfdffdsd Dfsdf Reghf Dfs"
                head={"Best Electrisnn Jamshedpur."}
              />
              <Card
                src={logo}
                photo={nf}
                name="Jay Prajash Pathak"
                rate="$400/day"
                desc="Some Desctiption lanina Jdnfdsfdf Dfdffdsd Dfsdf Reghf Dfs"
                head={"Best Electrisnn Jamshedpur."}
              />
              <Card
                name="Jay Prajash Pathak"
                rate="$400/day"
                desc="Some Desctiption lanina Jdnfdsfdf Dfdffdsd Dfsdf Reghf Dfs"
                head={"Best Electrisnn Jamshedpur."}
              />
              <Card
                name="Jay Prajash Pathak"
                rate="$400/day"
                desc="Some Desctiption lanina Jdnfdsfdf Dfdffdsd Dfsdf Reghf Dfs"
                head={"Best Electrisnn Jamshedpur."}
              />
            </div>
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
