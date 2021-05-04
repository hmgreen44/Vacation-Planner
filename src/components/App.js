import './App.css';
import { Router } from 'react-router';
import LandingPage from '../pages/LandingPage'
import RegisterPage from '../pages/RegisterPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import { AuthProvider } from '../utilities/AuthContext'
import history from "../utilities/history";
import {
  Switch,
  Route,
} from 'react-router-dom'
export default function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/">
              <LandingPage />
            </Route>
            <Route path="/registration/">
              <RegisterPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/create">
              <CreateTripPage />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
