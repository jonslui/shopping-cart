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
            numberOfItems = {props.numberOfItems}
          />
        }/>

        <Route path = '/shop/:id' render = { routeProps =>
          <ItemPage {...routeProps} 
            increaseItemQuantity = {props.increaseItemQuantity}
            numberOfItems = {props.numberOfItems}
          />
        }/>
        
        <Route exact path = '/shoppingcart' render = { routeProps =>
          <ShoppingCart {...routeProps}
            increaseItemQuantity = {props.increaseItemQuantity}
            decreaseItemQuantity = {props.decreaseItemQuantity}
            cartContents = {props.cartContents}
            numberOfItems = {props.numberOfItems}
            deleteCartItem = {props.deleteCartItem}
            clearCart = {props.clearCart}
          />
        }/>

        <Route exact path = '/aboutus' render = { routeProps => 
          <AboutUs {...routeProps}
          numberOfItems = {props.numberOfItems}
          /> 
        }/>
        <Route exact path = '/' render = { routeProps => 
          <Main {...routeProps}
          numberOfItems = {props.numberOfItems}
          /> 
        }/> 

        <Route render = { routeProps => 
          <NotFound {...routeProps}
          numberOfItems = {props.numberOfItems}
          /> 
        }/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;