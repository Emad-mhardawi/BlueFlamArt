import "./App.css";
import { Switch, Route } from "react-router-dom";
import AdminProtectedRoute from './protectedRoutes/AdminRoute';
import UserProtectedRoute from './protectedRoutes/UserProtectedRoute';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Layout from "./Containers/Layout/Layout";
import Signup from "./pages/Signup/Signup";
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
