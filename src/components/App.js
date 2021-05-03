import './App.css';
import LandingPage from '../pages/LandingPage'
import RegisterPage from '../pages/RegisterPage'
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
        </Switch>
        <Route path="/registration/">
          <RegisterPage />
        </Route>
      </Router>
    </AuthProvider>
    </div>
  );
}
