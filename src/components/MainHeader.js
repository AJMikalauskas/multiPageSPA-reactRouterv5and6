import styles from "./MainHeader.module.css"
import { NavLink, Link } from "react-router-dom";

const MainHeader = () => {
  return (
    //   Replace empty header tag in App.js with this component, 
        //   remember to import into App.js 1st
    <header className={styles.header}>
      <nav>
        <ul>
            {/* These need to be replaced so a new request to a new page 
            isn't called which would lost the application's state.
            Replace with <Link> tags which is a react-router custom component,
            no reloading is done. Switches page and prevents default internally  */}
          {/* <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li> */}

{/* Refresh or preventDefault stops the reloading of the pge everytime one of 
these linkes is clicked. */}
{/* Using NavLink tag instead from the same import source.
NavLink works the same as Link but allows you to show in the header
which page is the current one based on css activeClassName property*/}
          <li>
              {/* <Link to='/welcome'>Welcome</Link> */}
              <NavLink activeClassName={styles.active} to='/welcome'>Welcome</NavLink>
          </li>
          <li>
              {/* <Link to='/products'>Products</Link> */}
              <NavLink activeClassName={styles.active} to='/products'>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
