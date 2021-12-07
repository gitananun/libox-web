import FormInput from 'components/form/FormInput';

const SigninFormInputs = () => {
  return (
    <>
      <FormInput placeholder='libox@best.com' type='email' label='Email' />
      <FormInput placeholder='password' type='password' label='Password' />
    </>
  );
};

export default SigninFormInputs;
