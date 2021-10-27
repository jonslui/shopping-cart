import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Shop from './Shop';
import ItemPage from './ItemPage';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import ShoppingCart from './ShoppingCart';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/shop' render = { routeProps => 
          <Shop {...routeProps}
            addCartItem = {props.addCartItem}
            removeCartItem = {props.removeCartItem}
          />
        }/>

        <Route path = '/shop/:id' render = { routeProps =>
          <ItemPage {...routeProps} 
            addCartItem = {props.addCartItem}
            removeCartItem = {props.removeCartItem}
          />
        }/>
        
        <Route exact path = '/shoppingcart' render = { routeProps =>
          <ShoppingCart {...routeProps}
            addCartItem = {props.addCartItem}
            removeCartItem = {props.removeCartItem}
            cartContents = {props.cartContents}
          />
        }/>

        <Route exact path = '/aboutus' component = {AboutUs} />
        <Route exact path = '/' component = {Main} /> 
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;