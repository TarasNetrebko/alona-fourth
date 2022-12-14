
import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
    return (
      <>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};
