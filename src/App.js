import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import AdminHome from "./Pages/AdminDashboard/DashboardHome/AdminHome";
import ManageAllOrders from "./Pages/AdminDashboard/ManageAllOrders/ManageAllOrders";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Shop from "./Pages/Shop/Shop";
import MyOrders from './Pages/UserDashboard/MyOrders/MyOrders';
import Payment from "./Pages/UserDashboard/Payment/Payment";
import Reviews from "./Pages/UserDashboard/Reviews/Reviews";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about" component={About} />
            <PrivateRoute path="/shop">
              <Shop></Shop>
            </PrivateRoute>
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/myorders" component={MyOrders} />
            <Route path="/payment" component={Payment} />
            {/* <PrivateRoute path='/payment'><Payment></Payment></PrivateRoute> */}
            <Route path="/reviews" component={Reviews} />
            <Route path="/purchase/:purchaseId" component={Purchase} />
            <Route path="/manageOrders" component={ManageAllOrders} />
            <PrivateRoute path="/admin">
              <AdminHome></AdminHome>
            </PrivateRoute>
            <Route path="*" component={PageNotFound}/>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
