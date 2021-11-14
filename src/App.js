import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Shop from "./Pages/Shop/Shop";

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
            <Route path='/login' component={Login}/>
            <Route  path='/register' component={Register}/>
            <Route path="/dashboard" component={Dashboard} />
            <PrivateRoute path='/admin'>
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
