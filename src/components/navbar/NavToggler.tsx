const NavToggler = () => {
  return (
    <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <i className='fas fa-bars'></i>
    </button>
  );
};

export default NavToggler;
