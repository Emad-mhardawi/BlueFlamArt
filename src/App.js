import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Login from "./Containers/Login/Login";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/about" component={About} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
