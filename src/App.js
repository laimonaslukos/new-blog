
import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from './pages/single/Single';
import Write from "./pages/write/Write";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";
import Settings from './pages/settings/Settings';

function App() {
  return (
    <div className="App">
     
     <TopBar />
     <Home/> 
     <Single/>
     <Write />
     <Login />
     <Register />
     <Settings/>
    </div>
  );
}

export default App;
