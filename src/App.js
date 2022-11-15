import { Switch, Route } from "react-router-dom";

// components 
import Login from "./component/Login";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
