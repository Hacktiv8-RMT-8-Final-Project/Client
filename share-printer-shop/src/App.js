import './App.css';
import {Route, Switch} from 'react-router-dom'
import LoginShop from './pages/LoginShop'
import RegisterShop from './pages/RegisterShop'
import Home from './pages/Home'
import NewAddProduct from './pages/NewAddProduct';
import Test from './pages/tets';
import ProductCollection from './pages/ProductCollection'
import SideNavbar from './components/SideNavbar';
import { GuardProvider, GuardedRoute } from 'react-router-guards'

const authenticate = (to, from, next) => {
  if(localStorage.getItem('access_token') && to.location.pathname === '/loginShop'){
    next.redirect('/')
  } else if(localStorage.getItem('access_token') && to.location.pathname === '/registerShop'){
    next.redirect('/')
  } else if (!localStorage.getItem('access_token') && to.location.pathname === '/') {
    next.redirect('/loginShop')
  } else if (to.location.pathname === '/addProduct' && !localStorage.getItem('access_token')) {
    next.redirect('/loginShop')
  } else if (to.location.pathname === '/productCollection' && !localStorage.getItem('access_token')) {
    next.redirect('/loginShop')
  } else {
    next()
  }
}

function App() {
  return (
    <div className="App">
      <GuardProvider guards={[authenticate]}>
        <Switch>
          <GuardedRoute path="/loginShop" component={LoginShop} />
          <GuardedRoute path="/registerShop" component={RegisterShop} />
          <GuardedRoute path="/productCollection" exact>
            <SideNavbar />
            <ProductCollection />
          </GuardedRoute>
          <GuardedRoute path="/addProduct" exact>
            <SideNavbar />
            <NewAddProduct />
          </GuardedRoute>
          <GuardedRoute path="/" exact>
            <SideNavbar />
            <Home />
          </GuardedRoute>
        </Switch>
      </GuardProvider>
    </div>
  );
}

export default App;
