import Logo from 'assets/images/logo.svg';
import NavLink from 'components/navbar/NavLink';
import NavToggler from 'components/navbar/NavToggler';

const Navbar = () => {
  return (
    <nav className='container navbar navbar-expand-lg navbar-light'>
      <a className='navbar-brand' href='/'>
        <img src={Logo} alt='libox' className='d-inline img-fluid logo' />
      </a>
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
