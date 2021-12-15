import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormInput from 'components/form/FormInput';

const DashboardPasswordTab = () => {
  return (
    <div id='password' className='tab-pane'>
      <p className='title'>Password</p>
      <div className='section'>
        <div className='header'>
          <p className='section-title'>You are in a safe place!</p>
          <p className='section-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda, omnis obcaecati dolore in pariatur
            beatae est vel commodi eveniet, quibusdam ab exercitationem dignissimos! Recusandae fugiat sit ea ad quis?
          </p>
        </div>
        <div className='content'>
          <div className='content'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <FormInput type={'password'} label='Password' placeholder='password' />
              </div>
              <div className='col-12 col-lg-6'>
                <FormInput label='Confirm password' placeholder='password' />
              </div>
            </div>
            <div className='row'>
              <FormInput label='Email' placeholder='libox@best.io' value='jennica@libox.io' />
            </div>
            <div className='row mt-5 mb-0'>
              <div className='col'>
                <OutlinedButton className='w-100 btn-rounded' title='Cancel' />
              </div>
              <div className='col'>
                <RoundedPrimaryButton className='w-100' title='Reset' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPasswordTab;
