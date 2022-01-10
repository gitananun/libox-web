import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormInput from 'components/form/FormInput';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const DashboardAccountTab = () => {
  const [readOnly, setReadOnly] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user!);

  return (
    <div id='account' className='tab-pane'>
      <p className='title'>
        Account
        {readOnly && (
          <button className='btn m-0 p-0' onClick={() => setReadOnly(false)}>
            <i className='fa fa-pencil title-suffix text-primary'></i>
          </button>
        )}
      </p>
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
              <FormInput label='Name' placeholder='libox@best.io' defaultValue={user.name} readOnly={readOnly} />
            </div>
            <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
              <FormInput
                label='Lastname'
                readOnly={readOnly}
                placeholder='libox@best.io'
                defaultValue={user.lastname}
              />
            </div>
          </div>
          <div className='row'>
            <FormInput label='Email' placeholder='libox@best.io' defaultValue={user.email} readOnly={readOnly} />
          </div>
          <div className='row mt-5 mb-0'>
            <div className='col'>
              <OutlinedButton className='w-100 btn-rounded' title='Discard Changes' onClick={() => setReadOnly(true)} />
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
