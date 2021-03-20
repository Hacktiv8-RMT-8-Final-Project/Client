import './App.css';
import {Route, Switch} from 'react-router-dom'
import LoginShop from './pages/LoginShop'
import RegisterShop from './pages/RegisterShop'
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/loginShop">
          <LoginShop />
        </Route>
        <Route path="/registerShop">
          <RegisterShop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;