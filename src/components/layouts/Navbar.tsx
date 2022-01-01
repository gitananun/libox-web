import Logo from 'assets/images/logo.svg';
import NavLink from 'components/navbar/NavLink';
import NavToggler from 'components/navbar/NavToggler';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container navbar navbar-expand-lg navbar-light'>
      <Link className='navbar-brand' to='/'>
        <img src={Logo} alt='libox' className='d-inline img-fluid logo' />
      </Link>
      <NavToggler />
      <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <NavLink active={true} to='/'>
            Home
          </NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
