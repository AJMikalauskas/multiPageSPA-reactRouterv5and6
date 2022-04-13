import { Link } from 'react-router-dom';

// Please note:
// <Link to="/products/p1" ... could also be written as
// <Link to="p1" ... with React Router v6

// Notes on Other Changes
  //useHistory has been removed and has been replaced with useNavigate();
  // set constant navigate = useNavigate(); import from react-router-dom;
  // navigate('/welcome') -> goes to /welcome page, what happens to page stack???
  //navigate('/welcome',{replace:true}) -> replaces current route with /welcome and pushes new route
    // onto navigation stack
  // navigate(-1); -> goes to previous page
  // navigate(-2); goes to page before previous page but at this point just go to route 
    //try not to use -2
  //navigate(1); -> rare occasion of going forward in navigation stack

      // Last, but not least, <Prompt when={} message={()=>{}} />
        //Completely removed in version 6.0.0, have to create custom alert
        // Things like it removed include: useBlocker() and usePrompt() 

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
