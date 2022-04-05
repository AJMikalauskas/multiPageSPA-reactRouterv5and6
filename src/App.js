import { Route, Switch, Redirect } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import ProductsPage from './pages/ProductsPage';
import WelcomePage from './pages/WelcomePage';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <div>
      <MainHeader/>
      {/* This will only show 1 route at a time which stops the error of showing both. But now
      the error is that when you click a link in products page, it doesn't show the 
      product detail page. Could switch around Route of /products and route of 
      /products/:productId, this would work.
      Alternative solution:  add exact prop to /products Route tags*/}
      <Switch>
        {/*  Need exact here so that this doesn't show on every route shown below by being
         an empty path. Redirects from "/" to WelcomePage.js content due to react-router
         <Redirect> tags*/}
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
      {/* This will show the welcomepage component on ourdomain.com/welcome */}
      <Route path="/welcome">
        <WelcomePage/>
      </Route>
  {/* This will show the ProductsPage component on ourdomain.com/productspage */}
      <Route path="/products" exact>
        <ProductsPage/>
      </Route>
      {/*  Dynamic Route with Params to ProductDetail.js? change this to more
      of a normal website format which extends /products  to /products/:productId*/}
      <Route path="/products/:productId">
        <ProductDetail/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;

// ourdomain.com/ => most likely home component
// ourdomain.com/products => product component
// ourdomain.com/product-detail/a-book or a-carpet a-toothbrush => product component


// this could be done conditionally by link clicks and changing url and removing default show
  // but we installed react router for a reason.