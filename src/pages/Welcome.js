import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";

const Welcome = () => {
  return (
  <section>
    {/* This is the nested route, but it's changed from this react router v5 to a
    different code in react router v6 */}
    <h1>The Welcome Page</h1>

    {/* Route tag needs to be wrapped in <Routes> tag. Required by react-router-v6.
     Also, the path route inherits from the parent Route in App.js, so when the parent route
     is set to "/welcome/*" This path inherits the welcome and can just put the path as "new-user"
     instead of the path being "/welcome/new-user" */}
     {/* <Link> is also relative to the parent path to by the to="" property. This can
     be done in this file by using <Link to="new-user">New User</Link>
      instead of <Link to="/welcome/new-user" >New User </Link>*/}
{/*      <Routes>
    <Route path="new-user">
      <p>Welcome, new user!</p>
    </Route> 
    ->
    <Route path="new-user" element={<p>Welcome, new user!</p>} />
    </Routes> */}


      {/* Completely different approach to this nested route, cut out Route and Routes
      tags and replace with just the <Link> tag from above. Put the route nested route
      from this file in App.js "/welcome/*" Route tag */}
      <Link to="new-user">New User</Link>
      {/* Since there is 2 elements that hold DOM for the /new-user Route,
      Outlet is a placeholder for the Route tag element in App.js  */}
      <Outlet/>
  </section>
    );
};

export default Welcome;