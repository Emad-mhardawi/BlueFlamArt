import "./App.css";
import { Switch, Route } from "react-router-dom";
import AdminProtectedRoute from "./protectedRoutes/AdminRoute";
import UserProtectedRoute from "./protectedRoutes/UserProtectedRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./Containers/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import Order from "./pages/Order/order";
import OurWork from "./pages/ourWork/OurWork";
import Contact from "./pages/Contact/Contact";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const App = () => {
  return (
    <div className="App">
      <Switch>
      <AdminProtectedRoute path='/admin/dashboard' component={Dashboard}/>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={OurWork} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/resetPassword" component={ResetPassword} />
          <UserProtectedRoute path="/order" component={Order} />
          <UserProtectedRoute path="/profile" component={UserProfile} />
        </Layout>
      </Switch>
    </div>
  );
};

export default App;
