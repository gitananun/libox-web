import AuthBackButton from 'components/auth/AuthBackButton';
import AuthBannerContent from 'components/auth/AuthBannerContent';
import AuthFormSuggestion from 'components/auth/AuthFormSuggestion';
import AuthHeading from 'components/auth/AuthHeading';
import SignupFormInputs from 'components/auth/SignupFormInputs';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SocialButton from 'components/common/SocialButton';
import AuthLayout from './layouts/AuthLayout';
import Section from './layouts/Section';
import { authRegister } from '../services/auth';
import { setAccessToken } from 'utils/api';

const Signup = () => {
  const onRegister = () => {
    authRegister({ name: 'Tigran', lastname: 'Muradyan', email: 'tig404208bk.ru', password: 'nartigani' }).then(
      (data) => data && setAccessToken(data.body.accessToken)
    );
  };

  return (
    <AuthLayout>
      <Section className='col d-flex flex-column justify-content-center align-items-center'>
        <AuthBackButton to='/' />
        <AuthHeading title="Let's start from here" subtitle='Please enter your details' />
        <SignupFormInputs />
        <RoundedPrimaryButton title='Sign Up' className='mb-2' onClick={onRegister} />
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
