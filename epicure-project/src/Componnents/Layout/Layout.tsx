import { Outlet } from 'react-router-dom';
import Foot from './Footer/Footer';
import Head from './Header/Header';

const Layout = () => {
  return (
    <>
      <Head></Head>
      <Outlet />
      <Foot></Foot>
    </>
  );
};
export default Layout;
