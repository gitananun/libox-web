import { removeValidationAction } from 'actions/validation';
import FormChip from 'components/form/FormChip';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import FormTextArea from 'components/form/FormTextarea';
import { StoreCourseBody } from 'components/interfaces/Services';
import { ValidationErrors } from 'components/interfaces/Shared';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getCertificationOptions, getLanguagesEntries } from 'utils/shared';

interface Props {
  errors: ValidationErrors;
  checkedCategories: number[];
  checkCategory(id: number): void;
  formResult: Partial<StoreCourseBody>;
  imageRef: React.LegacyRef<HTMLInputElement>;
  onFormInputChange(input: keyof StoreCourseBody, value: any): void;
}

const DashboardCoursesTabFormContent = (props: Props) => {
  const state = useSelector((state: RootState) => state);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-lg-8'>
          <FormInput
            type='text'
            label='Title'
            placeholder='Title'
            value={props.formResult.title ?? ''}
            onFocus={() => removeValidationAction('title')}
            error={props.errors?.title && props.errors.title[0]}
            onChange={(v) => props.onFormInputChange('title', v.target.value)}
          />
        </div>
        <div className='col-12 col-lg-4 mt-3 mt-lg-0'>
          <FormSelect
            label='Language'
            options={getLanguagesEntries}
            className='radius-5 text-left'
            value={props.formResult.language ?? ''}
            onFocus={() => removeValidationAction('language')}
            error={props.errors?.language && props.errors.language[0]}
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
            value={props.formResult.description ?? ''}
            onFocus={() => removeValidationAction('description')}
            error={props.errors?.description && props.errors.description[0]}
            onChange={(v) => props.onFormInputChange('description', v.target.value)}
          />
        </div>
        <div className='col-6'>
          <FormInput
            type='file'
            label='Cover'
            accept='image/*'
            className='radius-5 mb-3'
            innerRef={props.imageRef}
            onFocus={() => removeValidationAction('image')}
            error={props.errors?.image && props.errors.image[0]}
            onChange={(v: any) => props.onFormInputChange('image', v.target.files[0])}
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
            value={props.formResult.badge?.toString() ?? ''}
            onFocus={() => removeValidationAction('badge')}
            error={props.errors?.badge && props.errors.badge[0]}
            onChange={(v) => props.onFormInputChange('badge', v.target.value)}
            options={state.badges.badges.map((c) => ({ title: c.name, value: c.id }))}
          />
        </div>
        <div className='col-4'>
          <FormInput
            type='number'
            label='Lessons'
            placeholder='154'
            className='radius-5'
            value={props.formResult.lessons?.toString() ?? ''}
            onFocus={() => removeValidationAction('lessons')}
            error={props.errors?.lessons && props.errors.lessons[0]}
            onChange={(v) => props.onFormInputChange('lessons', +v.target.value)}
          />
        </div>
        <div className='col-4'>
          <FormSelect
            label='Certification'
            className='radius-5'
            options={getCertificationOptions}
            value={props.formResult.certification?.toString() ?? ''}
            onFocus={() => removeValidationAction('certification')}
            error={props.errors?.certification && props.errors.certification[0]}
            onChange={(v) => props.onFormInputChange('certification', v.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-wrap gap-3'>
          <label className={`form-label w-100 mb-0 ${props.errors?.categories ? 'text-danger' : ''}`}>Categories</label>
          {state.categories.categories.map((c) => (
            <FormChip
              key={c.id}
              label={c.name}
              onClick={() => props.checkCategory(c.id)}
              checked={props.checkedCategories.find((e) => e === c.id) !== undefined}
            />
          ))}
          {props.errors?.categories && <div className='invalid-feedback d-block'> {props.errors.categories[0]} </div>}
        </div>
      </div>
    </>
  );
};

export default DashboardCoursesTabFormContent;
