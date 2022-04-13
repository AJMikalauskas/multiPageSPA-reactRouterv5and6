import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/*  Changes <Switch></Switch> to <Routes></Routes> for react router v6.
             Don't send in component between <Route> tags anymore, rather, pass into element
             property as dynamic, No pointer, pass in full component tag*/}
        <Routes>
          {/*  Redirect is no longer in react router v5, but rather is replaced by <Navigate/>  
           use replace keyword???  place in new element property of v6 and no exact keyword
           from v5 as it's akready in internal logic of v6*/}
          <Route path="/" element={<Navigate replace to="/welcome"/>}/>
          {/* Change this welcome Route path to "/welcome/*" -> This is for the nested route 
          in Welcome.js. Can also put nested Route in these Route tags */}
          {/* This nested route in this file makes things wayyyyyy simpler, because all 
          route definitions are in one file. Need to tell React where to place this paragraph
          element, since both <Link> and <Route> lead to the same Route -> Done so by <Outlet/>
          which is a placeholder for the "Welcome, new user" in Welcome.js*/}
          <Route path='/welcome/*' element={<Welcome />} >
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
            </Route>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
