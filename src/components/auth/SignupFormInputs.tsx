import FormInput from 'components/form/FormInput';

const SignupFormInputs = () => {
  return (
    <>
      <FormInput placeholder='libox@best.com' type='email' label='Email' />
      <FormInput placeholder='password' type='password' label='Password' />
      <FormInput placeholder='password' type='password' label='Confirm Password' />
    </>
  );
};

export default SignupFormInputs;
