import { Link } from 'react-router-dom';
import IconRow from '../common/IconRow';
import OutlinedButton from '../common/OutlinedButton';
import PrimaryButton from '../common/PrimaryButton';

const Header = () => {
  return (
    <div className='border-bottom' id='header'>
      <div className='container'>
        <header className='py-2 py-lg-0'>
          <div className='row align-items-between'>
            <div className='col-sm-6 col-lg-4 d-flex pb-2 pb-lg-0 flex-column flex-md-row justify-content-between align-items-center '>
              <IconRow iconClassName='fa fa-phone-alt'>
                <a href='tel:+37493404208'>
                  <p className='text-secondary'>+374 93 404 208</p>
                </a>
              </IconRow>
              <IconRow iconClassName='fa fa-envelope'>
                <a href='mailto:example@gmail.com'>
                  <p className='text-secondary'>example@gmail.com</p>
                </a>
              </IconRow>
            </div>
            <div className='col-sm-6 col-lg-8 d-flex justify-content-center justify-content-md-end align-items-center'>
              <Link to='/signup'>
                <OutlinedButton title='sign up' className='border-top-0 border-bottom-0' />
              </Link>
              <Link to='/signin'>
                <PrimaryButton title='log in' />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
