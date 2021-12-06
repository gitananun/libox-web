import AuthHeading from 'components/auth/AuthHeading';
import SignupFormInputs from 'components/auth/SignupFormInputs';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SocialButton from 'components/common/SocialButton';
import AuthLayout from './layouts/AuthLayout';
import Section from './layouts/Section';

const Signup = () => {
  return (
    <AuthLayout>
      <Section className='col d-flex flex-column justify-content-center align-items-center'>
        <AuthHeading title='Happy to see you here' subtitle='Please enter your details' />
        <SignupFormInputs />
        <RoundedPrimaryButton title='Sign Up' className='mb-3' />
        <SocialButton iconClassName='fab fa-google' className='btn-google mb-3' title='Sign Up with Google' />
        <SocialButton iconClassName='fab fa-github' className='btn-github' title='Sign Up with Github' />
      </Section>
      <Section className='col d-flex justify-content-center align-items-center banner'></Section>
    </AuthLayout>
  );
};

export default Signup;
