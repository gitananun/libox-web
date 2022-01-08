import { authForgotPasswordAction, authResetPasswordAction } from 'actions/auth';
import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormInput from 'components/form/FormInput';
import { infoToast, warningToast } from 'components/shared/Toast';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RootState } from 'store/rootReducer';

const DashboardPasswordTab = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const state = useSelector((state: RootState) => state);

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const forgotPassword = () => {
    authForgotPasswordAction({ email: state.auth.user!.email }).then((data) => infoToast(data.message!));
  };

  const onReset = () => {
    if (
      searchParams.get('token') &&
      passwordRef.current?.value &&
      confirmPasswordRef.current?.value &&
      confirmPasswordRef.current.value === passwordRef.current.value
    ) {
      authResetPasswordAction({
        email: state.auth.user!.email,
        token: searchParams.get('token')!,
        password: passwordRef.current?.value.trim(),
        confirmPassword: passwordRef.current?.value.trim(),
      }).then((data) => {
        infoToast(data.message!);
        navigate('/dashboard');
      });
    } else warningToast('Passwords must match');
  };

  const cancel = () => navigate('/dashboard');

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
                <FormInput
                  type={'password'}
                  label='Password'
                  innerRef={passwordRef}
                  placeholder='password'
                  defaultValue='password'
                  withoutObscure={true}
                  readOnly={!searchParams.has('token')}
                />
              </div>
              <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                <FormInput
                  type={'password'}
                  label='Confirm password'
                  placeholder='password'
                  defaultValue='password'
                  withoutObscure={true}
                  innerRef={confirmPasswordRef}
                  readOnly={!searchParams.has('token')}
                />
              </div>
            </div>
            <div className='row mt-5 mb-0'>
              {searchParams.has('token') ? (
                <>
                  <div className='col'>
                    <OutlinedButton className='w-100 btn-rounded' title='Cancel' onClick={cancel} />
                  </div>
                  <div className='col'>
                    <RoundedPrimaryButton className='w-100' title='Reset' onClick={onReset} />
                  </div>
                </>
              ) : (
                <div className='col-6'>
                  <RoundedPrimaryButton
                    className='w-100 btn-rounded'
                    title='Request reset password'
                    onClick={forgotPassword}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPasswordTab;
