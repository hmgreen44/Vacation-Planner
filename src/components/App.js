import './App.css';
import LandingPage from '../pages/LandingPage'
import RegisterPage from '../pages/RegisterPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import { AuthProvider } from '../utilities/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Router>
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
