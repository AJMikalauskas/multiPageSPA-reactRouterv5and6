import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* Change to navLink activeClassName, no longer a property to pass in
            Instead just use classname and an anonymous arrow function. If the NavLink.isActive
            pass in active class or else pass in empty className */}
            {/* What is isActive property? */}
            <NavLink className={(navData) => navData.isActive ? classes.active: ""} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active: ""} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
