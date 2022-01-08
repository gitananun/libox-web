import AuthBackButton from 'components/auth/AuthBackButton';
import AuthBannerContent from 'components/auth/AuthBannerContent';
import AuthFormSuggestion from 'components/auth/AuthFormSuggestion';
import AuthHeading from 'components/auth/AuthHeading';
import SignupFormInputs from 'components/auth/SignupFormInputs';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SocialButton from 'components/common/SocialButton';
import AuthLayout from './layouts/AuthLayout';
import Section from './layouts/Section';
import { getAccessToken, setAccessToken } from 'utils/shared';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { authRegisterAction } from 'actions/auth';

const Signup = () => {
  const state = useSelector((state: RootState) => state);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onRegister = () => {
    authRegisterAction({
      name: nameRef.current?.value.trim(),
      email: emailRef.current?.value.trim(),
      lastname: lastnameRef.current?.value.trim(),
      password: passwordRef.current?.value.trim(),
    }).then((data) => {
      data && setAccessToken(data.body.accessToken);
      getAccessToken() && navigate('/dashboard');
    });
  };

  return (
    <AuthLayout>
      <Section className='col d-flex flex-column justify-content-center align-items-center'>
        <AuthBackButton to='/' />
        <AuthHeading title="Let's start from here" subtitle='Please enter your details' />
        <div className='w-100'>
          <SignupFormInputs
            nameRef={nameRef}
            emailRef={emailRef}
            lastnameRef={lastnameRef}
            passwordRef={passwordRef}
            errors={state.validation.errors}
          />
          <RoundedPrimaryButton title='Sign Up' type='submit' className='mb-2' onClick={onRegister} />
        </div>
        <SocialButton iconClassName='fab fa-google' className='btn-google mb-2' title='Sign Up with Google' />
        <SocialButton iconClassName='fab fa-github' className='btn-github' title='Sign Up with Github' />
        <AuthFormSuggestion text='Already registered?' to='/signin' linkText='Sign In' />
      </Section>
      <Section className='col d-flex justify-content-center align-items-end banner'>
        <AuthBannerContent />
      </Section>
    </AuthLayout>
  );
};

export default Signup;
