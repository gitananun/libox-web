import { authUpdateUserAction } from 'actions/auth';
import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormInput from 'components/form/FormInput';
import { successToast } from 'components/shared/Toast';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const DashboardAccountTab = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const [readOnly, setReadOnly] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user!);

  const onSubmit = () => {
    if (nameRef.current && lastnameRef.current) {
      authUpdateUserAction({ name: nameRef.current.value, lastname: lastnameRef.current.value }).then(() => {
        successToast('User updated successfully!');
        setReadOnly(true);
      });
    }
  };

  return (
    <div id='account' className='tab-pane in active'>
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
              <FormInput
                label='Name'
                innerRef={nameRef}
                readOnly={readOnly}
                placeholder='libox@best.io'
                defaultValue={user.name}
              />
            </div>
            <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
              <FormInput
                label='Lastname'
                readOnly={readOnly}
                innerRef={lastnameRef}
                placeholder='libox@best.io'
                defaultValue={user.lastname}
              />
            </div>
          </div>
          <div className='row'>
            <FormInput label='Email' placeholder='libox@best.io' defaultValue={user.email} readOnly />
          </div>
          <div className='row mt-5 mb-0'>
            <div className='col'>
              <OutlinedButton className='w-100 btn-rounded' title='Discard Changes' onClick={() => setReadOnly(true)} />
            </div>
            <div className='col'>
              <RoundedPrimaryButton className='w-100' title='Save Changes' onClick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAccountTab;
