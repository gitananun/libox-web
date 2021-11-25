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
                <p className='text-secondary'>example@gmail.com</p>
              </IconRow>
              <IconRow iconClassName='fa fa-envelope'>
                <p className='text-secondary'>example@gmail.com</p>
              </IconRow>
            </div>
            <div className='col-sm-6 col-lg-8 d-flex justify-content-center justify-content-md-end align-items-center'>
              <OutlinedButton title='sign up' className='border-top-0 border-bottom-0' />
              <PrimaryButton title='log in' />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
