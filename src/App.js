import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import AboutMe from "./AboutMe";
import Portifolio from "./Portifolio";
import Contact from "./Contact";
import Menuu from "./Menuu";
import Controls from "./Control";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <AboutMe />
              </Route>
              <Route path="/portifolio">
                <Portifolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <Menuu />
        </header>
      </div>
    </Router>
  );
}

export default App;
