import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import ItemPage from './ItemPage';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import ShoppingCart from './ShoppingCart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/shop' component = {Shop} />
        <Route path = '/shop/:id' component = {ItemPage}/>
        <Route exact path = '/aboutus' component = {AboutUs} />
        <Route exact path = '/shoppingcart' component = {ShoppingCart} />
        <Route exact path = '/' component = {App} /> 
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;