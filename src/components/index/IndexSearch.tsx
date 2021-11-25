import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SearchWrapper from 'components/common/SearchWrapper';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';

const IndexSearch = () => {
  return (
    <SearchWrapper>
      <div className='row w-100 d-flex justify-content-between align-items-center'>
        <div className='col-lg-3 col-12 justify-content-center'>
          <FormSelect options={['Design', 'Development', 'Music']} />
        </div>
        <div className='col-lg-7 col-12 text-center justify-content-end'>
          <FormInput placeholder='What do you want to learn today?' type='text' />
        </div>
        <div className='col-lg-2 col-12 text-lg-end col-start'>
          <RoundedPrimaryButton title='Search' className='w-100' />
        </div>
      </div>
    </SearchWrapper>
  );
};

export default IndexSearch;
