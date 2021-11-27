import FooterBrandContent from './FooterBrandContent';
import FooterNavLink from './FooterNavLink';
import FooterSocialItem from './FooterSocialItem';

const Footer = () => {
  return (
    <footer className='footer mt-5 py-4'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-6 col-lg-3'>
            <FooterBrandContent />
          </div>
          <div className='col-6 nav-links'>
            <div className='d-flex justify-content-around'>
              <FooterNavLink href='#'>Home</FooterNavLink>
              <FooterNavLink href='#'>About</FooterNavLink>
              <FooterNavLink href='#'>Courses</FooterNavLink>
              <FooterNavLink href='#'>Blog</FooterNavLink>
              <FooterNavLink href='#'>Contact</FooterNavLink>
            </div>
          </div>
          <div className='col-6 col-lg-3'>
            <div className='d-flex justify-content-end justify-content-lg-center'>
              <FooterSocialItem href='#social' iconClassName='fab fa-facebook' />
              <FooterSocialItem href='#social' iconClassName='fab fa-linkedin' />
              <FooterSocialItem href='#social' iconClassName='fab fa-instagram' />
              <FooterSocialItem href='#social' iconClassName='fab fa-twitter' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
