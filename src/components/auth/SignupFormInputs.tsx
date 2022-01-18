import { removeValidationAction } from 'actions/validation';
import FormInput from 'components/form/FormInput';
import { ValidationErrors } from 'components/interfaces/Shared';

interface Props {
  errors: ValidationErrors;
  nameRef: React.LegacyRef<HTMLInputElement>;
  emailRef: React.LegacyRef<HTMLInputElement>;
  lastnameRef: React.LegacyRef<HTMLInputElement>;
  passwordRef: React.LegacyRef<HTMLInputElement>;
}

const SignupFormInputs = (props: Props) => {
  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <FormInput
            type='text'
            label='Name'
            placeholder='Libox'
            innerRef={props.nameRef}
            onFocus={() => removeValidationAction('name')}
            error={props.errors?.name && props.errors.name[0]}
          />
        </div>
        <div className='col-6'>
          <FormInput
            type='string'
            label='Lastname'
            placeholder='Armenyan'
            innerRef={props.lastnameRef}
            onFocus={() => removeValidationAction('lastname')}
            error={props.errors?.lastname && props.errors.lastname[0]}
          />
        </div>
      </div>
      <FormInput
        type='email'
        label='Email'
        placeholder='libox@me.co'
        innerRef={props.emailRef}
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
    </>
  );
};

export default SignupFormInputs;
