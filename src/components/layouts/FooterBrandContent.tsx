import logo from 'assets/images/logo.svg';

const FooterBrandContent = () => {
  return (
    <div className='brand-content'>
      <div className='d-flex flex-column'>
        <img src={logo} className='img-fluid logo' alt='Libox' />

        <p className='text-secondary'>
          <a className='text-secondary' href='#mail'>
            app@libox.io
          </a>
          &nbsp;|&nbsp;Copyright {new Date().getFullYear()} &copy;{' '}
          <a className='text-primary' href='/'>
            Libox
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBrandContent;
