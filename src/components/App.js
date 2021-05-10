import './App.css';
import { Router } from 'react-router';
import LoginPage from '../pages/LoginPage'
import LandingPage from '../pages/LandingPage'
import Footer from '../components/Footer'
import Nav from './Nav'
import RegisterPage from '../pages/RegisterPage'
import AboutPage from '../pages/AboutPage'
import Authorized from './Authorized'
import { AuthProvider } from '../utilities/AuthContext'
import history from "../utilities/history";
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
export default function App() {


  return (
    <div className="App">
      <Router history={history}>
        <AuthProvider>
          <Nav />
          <Footer />
          <Authorized />
          <Switch>
            <Route exact={true} path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/registration">
              <RegisterPage />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
