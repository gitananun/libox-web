import AuthBackButton from 'components/auth/AuthBackButton';
import AuthBannerContent from 'components/auth/AuthBannerContent';
import AuthFormSuggestion from 'components/auth/AuthFormSuggestion';
import AuthHeading from 'components/auth/AuthHeading';
import SigninFormInputs from 'components/auth/SigninFormInputs';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SocialButton from 'components/common/SocialButton';
import AuthLayout from './layouts/AuthLayout';
import Section from './layouts/Section';

const Signin = () => {
  return (
    <AuthLayout>
      <Section className='col d-flex flex-column justify-content-center align-items-center'>
        <AuthBackButton to='/' />
        <AuthHeading title='Welcome back!' subtitle='Please enter your details' />
        <SigninFormInputs />
        <RoundedPrimaryButton title='Sign In' className='mb-2' />
        <SocialButton iconClassName='fab fa-google' className='btn-google mb-2' title='Sign In with Google' />
        <SocialButton iconClassName='fab fa-github' className='btn-github' title='Sign In with Github' />
        <AuthFormSuggestion text="Don't have account yet?" to='/signup' linkText='Sign Up' />
      </Section>
      <Section className='col d-flex justify-content-center align-items-end banner signin-banner'>
        <AuthBannerContent />
      </Section>
    </AuthLayout>
  );
};

export default Signin;
