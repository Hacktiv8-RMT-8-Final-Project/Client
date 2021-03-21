import './App.css';
import {Route, Switch} from 'react-router-dom'
import LoginShop from './pages/LoginShop'
import RegisterShop from './pages/RegisterShop'
import Home from './pages/Home'
import NewAddProduct from './pages/NewAddProduct';
import Test from './pages/tets';
import SideNavbar from './components/SideNavbar';
import ProductCollection from './pages/ProductCollection';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/productCollection">
          <SideNavbar />
          <ProductCollection />
        </Route>
        <Route path="/addProduct">
          <SideNavbar />
          <NewAddProduct />
        </Route>
        <Route path="/loginShop">
          <LoginShop />
        </Route>
        <Route path="/registerShop">
          <RegisterShop />
        </Route>
        <Route path="/history">
          <SideNavbar />
          <OrderHistory />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/">
          <SideNavbar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
