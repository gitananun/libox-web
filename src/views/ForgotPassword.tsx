import AuthBackButton from 'components/auth/AuthBackButton';
import AuthBannerContent from 'components/auth/AuthBannerContent';
import AuthFormSuggestion from 'components/auth/AuthFormSuggestion';
import AuthHeading from 'components/auth/AuthHeading';
import ForgotPasswordFormInputs from 'components/auth/ForgotPasswordFormInputs';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import AuthLayout from './layouts/AuthLayout';
import Section from './layouts/Section';

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <Section className='col d-flex flex-column justify-content-center align-items-center'>
        <AuthBackButton to='/' />
        <AuthHeading title='Forgot your password?' subtitle='Reset it with email' />
        <ForgotPasswordFormInputs />
        <RoundedPrimaryButton title='Reset' className='mb-2' />
        <AuthFormSuggestion text='Just remembered!' to='/signin' linkText='Sign In' />
      </Section>
      <Section className='col d-flex justify-content-center align-items-end banner banner-forgot-password'>
        <AuthBannerContent />
      </Section>
    </AuthLayout>
  );
};

export default ForgotPassword;
