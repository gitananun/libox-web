import FormInput from 'components/form/FormInput';
import { Link } from 'react-router-dom';

const SigninFormInputs = () => {
  return (
    <>
      <FormInput placeholder='libox@best.com' type='email' label='Email' />
      <FormInput placeholder='password' type='password' label='Password' />
      <Link to='/forgot-password' className='w-100 text-end mb-3'>
        Forgot Password?
      </Link>
    </>
  );
};

export default SigninFormInputs;
