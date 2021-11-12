import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path='/about' component={About}/>
          <Route  path='/shop' component={Shop}/>
          <Route  path='/contact' component={Contact}/>
          <Route  path='/blog' component={Blog}/>
          <Route  path='/dashboard' component={Dashboard}/>
          <Route  path='/login' component={Login}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
