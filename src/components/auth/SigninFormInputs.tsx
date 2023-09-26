import { removeValidationAction } from 'actions/validation';
import FormInput from 'components/form/FormInput';
import { ValidationErrors } from 'components/interfaces/Shared';
import { Link } from 'react-router-dom';

interface Props {
  errors: ValidationErrors;
  emailRef: React.LegacyRef<HTMLInputElement>;
  passwordRef: React.LegacyRef<HTMLInputElement>;
}

const SigninFormInputs = (props: Props) => {
  return (
    <>
      <FormInput
        type='email'
        label='Email'
        innerRef={props.emailRef}
        placeholder='libox@best.com'
        onFocus={() => removeValidationAction('email')}
        error={props.errors?.email && props.errors.email[0]}
      />
      <FormInput
        type='password'
        label='Password'
        placeholder='password'
        innerRef={props.passwordRef}
        onFocus={() => removeValidationAction('password')}
        error={props.errors?.password && props.errors.password[0]}
      />
      <Link to='/forgot-password' className='w-100 text-end mb-3'>
        Forgot Password?
      </Link>
    </>
  );
};

export default SigninFormInputs;
