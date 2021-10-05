import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
   
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route  path="/signup">
            <SignupScreen />
          </Route>
          <Route  path="/signin">
            <LoginScreen />
          </Route>
    
    </Switch>
    </Router>
  );
}

export default App;
