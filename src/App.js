import "./App.css";
import { Switch, Route } from "react-router-dom";
import AdminProtectedRoute from './protectedRoutes/AdminRoute';
import UserProtectedRoute from './protectedRoutes/UserProtectedRoute';
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Login from "./Containers/Login/Login";
import Layout from "./Components/Layout/Layout";
import Signup from "./Containers/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";


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
          <Route path="/register" component={Signup} />
          
          <UserProtectedRoute path='/profile' component={UserProfile}/>
          <AdminProtectedRoute path='/admin/dashboard' component={Dashboard}/>
        </Switch>
      </Layout>
     
    </div>
  );
};

export default App;
