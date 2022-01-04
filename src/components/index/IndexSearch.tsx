import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import SearchWrapper from 'components/common/SearchWrapper';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

interface Props {
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  titleRef: React.LegacyRef<HTMLInputElement>;
  categoryRef: React.LegacyRef<HTMLSelectElement>;
}

const IndexSearch = (props: Props) => {
  const categories = useSelector((state: RootState) => state.categories.categories.slice(0, 6));

  return (
    <SearchWrapper>
      <div className='row w-100 d-flex justify-content-between align-items-center'>
        <div className='col-lg-3 col-12 justify-content-center'>
          <FormSelect options={categories.map((c) => ({ title: c.name, value: c.id }))} innerRef={props.categoryRef} />
        </div>
        <div className='col-lg-7 col-12 text-center justify-content-end'>
          <FormInput
            required
            type='text'
            search={true}
            innerRef={props.titleRef}
            placeholder='What do you want to learn today?'
          />
        </div>
        <div className='col-lg-2 col-12 text-lg-end col-start'>
          <RoundedPrimaryButton title='Search' className='w-100' onClick={props.onSearch} />
        </div>
      </div>
    </SearchWrapper>
  );
};

export default IndexSearch;
