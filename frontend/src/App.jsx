import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./components/maincard";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notfound";
import SignupPage from "./pages/signup";
import logo from "./logo512.png";
import nf from "./pages/notfound/notfound.png";
import NavBar from "./components/navbar";
import WorkerHomePage from "./pages/workerhome";
import WorkerCompanies from "./pages/workercompanies";
import Ehomepage from "./pages/emplyerhome";
import Order from "./pages/employerOrders";
import Companyhome from "./pages/companyHome";

function App() {
  return (
    <div className="App select-none bg-gray-100 h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/company">
            <Companyhome />
          </Route>
          <Route path="/employerhome">
            <Ehomepage />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/workerhome">
            <WorkerHomePage />
          </Route>
          <Route path="/workercompanies">
            <WorkerCompanies />
          </Route>
          <Route path="/test">
            <WorkerHomePage />
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
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
