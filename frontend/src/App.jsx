import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./components/maincard";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notfound";
import SignupPage from "./pages/signup";
import logo from "./logo512.png";
import nf from "./pages/notfound/notfound.png";
import NavBar from "./components/navbar";
import IndiHPage from "./pages/individualHomePage";

function App() {
  return (
    <div className="App select-none">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
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
