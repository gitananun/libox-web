import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SectionTitle from 'components/common/SectionTitle';
import FormInput from 'components/form/FormInput';

const IndexNewsletter = () => {
  return (
    <div className='section index-newsletter'>
      <div className='container'>
        <div className='row align-items center d-flex justify-between-center'>
          <div className='col-3'></div>
          <div className='col-6'>
            <SectionTitle title="Subscribe it's free" lead='Be always notified to new library resources' />
            <FormInput type='email' className='mb-3' placeholder='Newsletter Email' />
            <RoundedPrimaryButton className='w-100' title='Subscribe' />
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  );
};

export default IndexNewsletter;
