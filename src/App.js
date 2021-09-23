import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from './pages/login/Login';


function App() {
  const user = false;
  return (
    <Router>

      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/login">
        {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/write">
        {user ? <Write/> : <Register/>}
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
     
      <Single />
      <Settings />
    </Router>
      
    
  );
}

export default App;
