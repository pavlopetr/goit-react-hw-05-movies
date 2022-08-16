import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from '../SharedLayout/SharedLayout.module.css';
const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={s.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
