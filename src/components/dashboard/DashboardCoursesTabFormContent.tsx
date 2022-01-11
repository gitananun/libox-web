import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormChip from 'components/form/FormChip';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import FormTextArea from 'components/form/FormTextarea';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getCertificationOptions, getLanguagesEntries } from 'utils/shared';
import { CreateCourseFormResult } from './tabs/DashboardCoursesTab';

interface Props {
  checkedCategories: number[];
  checkCategory(id: number): void;
  onFormInputChange(input: keyof CreateCourseFormResult, value: any): void;
}

const DashboardCoursesTabFormContent = (props: Props) => {
  const state = useSelector((state: RootState) => state);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-lg-8'>
          <FormInput
            type={'text'}
            label='Title'
            placeholder='Title'
            onChange={(v) => props.onFormInputChange('title', v.target.value)}
          />
        </div>
        <div className='col-12 col-lg-4 mt-3 mt-lg-0'>
          <FormSelect
            label='Language'
            options={getLanguagesEntries}
            className='radius-5 text-left'
            onChange={(v) => props.onFormInputChange('language', v.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <FormTextArea
            label='Description'
            className='radius-5'
            placeholder='Best library course ever'
            onChange={(v) => props.onFormInputChange('description', v.target.value)}
          />
        </div>
        <div className='col-6'>
          <FormInput
            label='Cover'
            type={'file'}
            className='radius-5 mb-3'
            onChange={(v) => props.onFormInputChange('image', v.target.value)}
          />
          <small className='text-secondary'>
            The file must be image with the formats png/jpg/webp.
            <hr className='bg-secondary' />
            File can't exceed 200mb. Please upload the best quality image, to have reachable result in the library.
          </small>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <FormSelect
            label='Badge'
            className='radius-5'
            onChange={(v) => props.onFormInputChange('badge', v.target.value)}
            options={state.badges.badges.map((c) => ({ title: c.name, value: c.id }))}
          />
        </div>
        <div className='col-4'>
          <FormInput
            label='Lessons'
            type={'number'}
            placeholder='154'
            className='radius-5'
            onChange={(v) => props.onFormInputChange('lessons', +v.target.value)}
          />
        </div>
        <div className='col-4'>
          <FormSelect
            label='Certification'
            className='radius-5'
            options={getCertificationOptions}
            onChange={(v) => props.onFormInputChange('certification', v.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-wrap gap-3'>
          <label className='form-label w-100 mb-0'>Categories</label>
          {state.categories.categories.map((c) => (
            <FormChip
              key={c.id}
              label={c.name}
              onClick={() => props.checkCategory(c.id)}
              checked={props.checkedCategories.find((e) => e === c.id) !== undefined}
            />
          ))}
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <FormInput
            type={'date'}
            label='Created at'
            className='radius-5'
            onChange={(v) => props.onFormInputChange('createdAt', v.target.value)}
          />
        </div>
        <div className='col-6'>
          <FormInput
            type={'date'}
            label='Last Updated'
            className='radius-5'
            onChange={(v) => props.onFormInputChange('updatedAt', v.target.value)}
          />
        </div>
      </div>
      <div className='row mt-5 mb-0'>
        <div className='col'>
          <OutlinedButton className='w-100 btn-rounded' title='Reset All' />
        </div>
        <div className='col'>
          <RoundedPrimaryButton className='w-100' title='Post to Library' />
        </div>
      </div>
    </>
  );
};

export default DashboardCoursesTabFormContent;
