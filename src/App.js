import "./App.css";
import header from "./Component2.svg";
import logo from "./logo.svg";
import leftlogo from "./leftlogo.png";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <img src={header} alt="" />
            <div className="app__content">
              <div className="app__left">
                <h1 className="app__leftText">Aapki Apni Online Dukaan</h1>
                <img src={leftlogo} alt="" className="app__leftLogo" />
              </div>
              <div className="app__right">
                <div className="app__zopnik">
                  <img src={logo} alt="" />
                  <h1 className="app__welcome">Welcome to Zopnik</h1>
                </div>

                <Login />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
