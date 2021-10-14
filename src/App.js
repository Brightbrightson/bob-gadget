import {Switch, Route} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const ComputerAccessories = () => (
  <div>
    <h1>Computer & Accessories</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/ComputerAccessories"
          component={ComputerAccessories}
        />
      </Switch>
    </div>
  );
}

export default App;
