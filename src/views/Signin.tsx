import { authLoginAction, authSelfAction } from 'actions/auth';
import AuthBackButton from 'components/auth/AuthBackButton';
import AuthBannerContent from 'components/auth/AuthBannerContent';
import AuthFormSuggestion from 'components/auth/AuthFormSuggestion';
import AuthHeading from 'components/auth/AuthHeading';
import SigninFormInputs from 'components/auth/SigninFormInputs';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SocialButton from 'components/common/SocialButton';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store/rootReducer';
import { getAccessToken, setAccessToken } from 'utils/shared';
import AuthLayout from './layouts/AuthLayout';
import Section from './layouts/Section';

const Signin = () => {
  const state = useSelector((state: RootState) => state);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onLogin = () => {
    authLoginAction({
      email: emailRef.current?.value.trim(),
      password: passwordRef.current?.value.trim(),
    }).then((data) => {
      data && setAccessToken(data.body.accessToken);
      authSelfAction();
      getAccessToken() && navigate('/');
    });
  };

  return (
    <AuthLayout>
      <Section className='col d-flex flex-column justify-content-center align-items-center'>
        <AuthBackButton to='/' />
        <AuthHeading title='Welcome back!' subtitle='Please enter your details' />
        <SigninFormInputs emailRef={emailRef} passwordRef={passwordRef} errors={state.validation.errors} />
        <RoundedPrimaryButton title='Sign In' className='mb-2' onClick={onLogin} />
        <SocialButton iconClassName='fab fa-google' className='btn-google mb-2' title='Sign In with Google' />
        <SocialButton iconClassName='fab fa-github' className='btn-github' title='Sign In with Github' />
        <AuthFormSuggestion text="Don't have account yet?" to='/signup' linkText='Sign Up' />
      </Section>
      <Section className='col d-flex justify-content-center align-items-end banner banner-signin'>
        <AuthBannerContent />
      </Section>
    </AuthLayout>
  );
};

export default Signin;
