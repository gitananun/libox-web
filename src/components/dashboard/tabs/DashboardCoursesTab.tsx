import { fetchBadgesAction } from 'actions/badges';
import { fetchCategoriesAction } from 'actions/categories';
import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import FormChip from 'components/form/FormChip';
import FormInput from 'components/form/FormInput';
import FormSelect from 'components/form/FormSelect';
import FormTextArea from 'components/form/FormTextarea';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { getCertificationOptions, getLanguagesEntries } from 'utils/shared';

const DashboardCoursesTab = () => {
  const state = useSelector((state: RootState) => state);
  const [checkedCategories, setCheckedCategories] = useState<number[]>([]);

  useEffect(() => {
    fetchCategoriesAction();
    fetchBadgesAction();
  }, []);

  const checkCategory = (id: number) => {
    const result = checkedCategories;
    const catIndex = checkedCategories.indexOf(id);
    if (catIndex > -1) result.splice(catIndex, 1);
    else result.push(id);

    setCheckedCategories([...result]);
  };

  return (
    <div id='courses' className='tab-pane dashboard-courses-tab in active'>
      <p className='title'>Courses</p>
      <div className='section'>
        <div className='header'>
          <p className='section-title'>Let's manage your course library</p>
          <p className='section-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda, omnis obcaecati dolore in pariatur
            beatae est vel commodi eveniet, quibusdam ab exercitationem dignissimos! Recusandae fugiat sit ea ad quis?
          </p>
        </div>
        <div className='content'>
          <div className='row'>
            <div className='col-12 col-lg-8'>
              <FormInput type={'text'} label='Title' placeholder='Title' />
            </div>
            <div className='col-12 col-lg-4 mt-3 mt-lg-0'>
              <FormSelect label='Language' className='radius-5 text-left' options={getLanguagesEntries} />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <FormTextArea label='Description' className='radius-5' placeholder='Best library course ever' />
            </div>
            <div className='col-6'>
              <FormInput label='Cover' className='radius-5 mb-3' type={'file'} />
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
                options={state.badges.badges.map((c) => ({ title: c.name, value: c.id }))}
              />
            </div>
            <div className='col-4'>
              <FormInput label='Lessons' className='radius-5' type={'number'} placeholder='154' />
            </div>
            <div className='col-4'>
              <FormSelect label='Certification' className='radius-5' options={getCertificationOptions} />
            </div>
          </div>
          <div className='row'>
            <div className='d-flex flex-wrap gap-3'>
              <label className='form-label w-100 mb-0'>Categories</label>
              {state.categories.categories.map((c) => (
                <FormChip
                  key={c.id}
                  label={c.name}
                  onClick={() => checkCategory(c.id)}
                  checked={checkedCategories.find((e) => e === c.id) !== undefined}
                />
              ))}
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <FormInput label='Created at' className='radius-5' type={'date'} />
            </div>
            <div className='col-6'>
              <FormInput label='Last Updated' className='radius-5' type={'date'} />
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
        </div>
      </div>
    </div>
  );
};

export default DashboardCoursesTab;
