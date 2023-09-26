import { subscribeNewsletterAction } from 'actions/newsletters';
import { removeValidationAction } from 'actions/validation';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SectionTitle from 'components/common/SectionTitle';
import FormInput from 'components/form/FormInput';
import { successToast, warningToast } from 'components/shared/Toast';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const IndexNewsletter = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const state = useSelector((state: RootState) => state);

  const onSubmit = () => {
    if (emailRef.current?.value.trim()) {
      subscribeNewsletterAction({ email: emailRef.current?.value }).then((data) => successToast(data.message!));
    } else warningToast('Please subscribe with valid email');
  };

  return (
    <div className='section index-newsletter'>
      <div className='container'>
        <SectionTitle title="Subscribe it's free" lead='Be always notified to new library resources' />
        <FormInput
          required
          type='email'
          className='mb-3'
          innerRef={emailRef}
          placeholder='Newsletter Email'
          onFocus={() => removeValidationAction('email')}
          error={state.validation.errors?.email && state.validation.errors?.email[0]}
        />
        <RoundedPrimaryButton className='w-100' title='Subscribe' onClick={onSubmit} />
      </div>
    </div>
  );
};

export default IndexNewsletter;
