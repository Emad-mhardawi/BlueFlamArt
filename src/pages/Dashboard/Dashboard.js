import './Dashboard.css';
import DashboardNav from './DashboardNav';
import { Switch, Route } from "react-router-dom";
import AdminAddUser from './AdminAddUser';
import AdminUsersList from './AdminUsersList';

const Dashboard = ()=>{
    return(
        <div className='dashboard'>
        <Switch>
            <DashboardNav>
            <Route path="/admin/dashboard/addUser" component={AdminAddUser} />
            <Route path="/admin/dashboard/usersList" component={AdminUsersList} />
            </DashboardNav>
        </Switch>
          </div>

    )
}


export default Dashboard;