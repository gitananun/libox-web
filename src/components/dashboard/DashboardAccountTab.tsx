import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormInput from 'components/form/FormInput';

const DashboardAccountTab = () => {
  return (
    <div id='account' className='tab-pane in active'>
      <p className='title'>Account</p>
      <div className='section'>
        <div className='header'>
          <p className='section-title'>Personal Informations</p>
          <p className='section-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda, omnis obcaecati dolore in pariatur
            beatae est vel commodi eveniet, quibusdam ab exercitationem dignissimos! Recusandae fugiat sit ea ad quis?
          </p>
        </div>
        <div className='content'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <FormInput label='Name' placeholder='libox@best.io' value='jennica@libox.io' />
            </div>
            <div className='col-12 col-lg-6'>
              <FormInput label='Lastname' placeholder='libox@best.io' value='jennica@libox.io' />
            </div>
          </div>
          <div className='row'>
            <FormInput label='Email' placeholder='libox@best.io' value='jennica@libox.io' />
          </div>
          <div className='row mt-5 mb-0'>
            <div className='col'>
              <OutlinedButton className='w-100 btn-rounded' title='Discard Changes' />
            </div>
            <div className='col'>
              <RoundedPrimaryButton className='w-100' title='Save Changes' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAccountTab;
