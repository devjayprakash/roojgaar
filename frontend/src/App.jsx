import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notfound";
import SignupPage from "./pages/signup";
import WorkerHomePage from "./pages/workerhome";
import WorkerCompanies from "./pages/workercompanies";
import Ehomepage from "./pages/emplyerhome";
import Order from "./pages/employerOrders";
import Companyhome from "./pages/companyHome";
import StatsPage from "./pages/stats";
import Hire from "./pages/hireme";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/loader";


export let AuthContext = createContext()


function App() {

  let [auth, setAuth] = useState({
    userDetail: null,
    auth: false
  })

  let [authChecked, setAuthChecked] = useState(false)

  let fetchAuthData = async () => {
    try {
      if (document.cookie !== "") {
        let jwt = document.cookie.split('=')[1]
        let res = await axios.post('http://localhost:8080/api/v1/auth/verifyToken', {
          token: jwt
        })
        if (res.data.res) {
          setAuth({
            userDetail: res.data.userdata,
            auth: true
          })
        }
      }
    } catch (err) {
      console.log(err);
    }
    setAuthChecked(true)
  }

  useEffect(() => {
    fetchAuthData()
  }, [])

  if (authChecked === false) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={auth}>
      <div className="App select-none bg-gray-100 h-screen">
        <BrowserRouter>
          <Switch>
            <Route path="/company/hire">
              <Hire />
            </Route>
            <Route path="/company">
              <Companyhome />
            </Route>
            <Route path="/employerhome" render={() => {
              return auth.userDetail.registeredAs === "employer" ? (<Ehomepage />) : <Redirect to={"/unvalidpath"} />
            }} />
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/workerhome" render={() => {
              return auth.userDetail.registeredAs !== "employer" ? (<WorkerHomePage />) : <Redirect to={"/unvalidpath"} />
            }} />
            <Route path="/workercompanies">
              <WorkerCompanies />
            </Route>
            <Route path="/test">
              <WorkerHomePage />
            </Route>
            <Route path="/" exact render={() => {
              if (auth.auth == false) {
                return <HomePage />
              }

              if (auth.userDetail.registeredAs === "employer") {
                if (auth.userDetail.type === "individual") {
                  return <Redirect to={'/employerhome'} />
                } else {
                  return <Redirect to={'/company'} />
                }
              } else {
                return <Redirect to={'/workerhome'} />
              }

            }} />
            <Route path="/signup" render={() => {
              return auth.auth === true ? <Redirect to={'/'} /> : <SignupPage />
            }} />
            <Route path="/login">
              {auth.auth === true ? <Redirect to={'/'} /> : <LoginPage />}
            </Route>
            <Route path="/stats/:id">
              <StatsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
