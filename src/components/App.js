import './App.css';
import { Router } from 'react-router';
import LandingPage from '../pages/LandingPage'
import Nav from './Nav'
import RegisterPage from '../pages/RegisterPage'
import AboutPage from '../pages/AboutPage'
import Authorized from './Authorized'
import { AuthProvider } from '../utilities/AuthContext'
import history from "../utilities/history";
import {
  Switch,
  Route,
} from 'react-router-dom'
export default function App() {


  return (
    <Router history={history}>
      <AuthProvider>
        <Nav />
        <div className="App container-fluid">
          <div className="row mt-5 pt-4">
            <div className="col-md-8 mt-5 offset-md-2">
              <div className="card p-5">  
                  <Authorized /> 
                <Switch>
                  <Route exact={true} path="/">
                    <LandingPage />
                    </Route>
                    <Route path="/about">
                      <AboutPage />
                  </Route>
                  <Route path="/registration">
                    <RegisterPage />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}
