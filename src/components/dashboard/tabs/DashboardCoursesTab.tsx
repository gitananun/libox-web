import { fetchBadgesAction } from 'actions/badges';
import { fetchCategoriesAction } from 'actions/categories';
import { storeCourseAction } from 'actions/courses';
import OutlinedButton from 'components/common/OutlinedButton';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import { StoreCourseBody } from 'components/interfaces/Services';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import DashboardCoursesTabFormContent from '../DashboardCoursesTabFormContent';

const DashboardCoursesTab = () => {
  const state = useSelector((state: RootState) => state);
  const [formResult, setFormResult] = useState<Partial<StoreCourseBody>>({});

  useEffect(() => {
    fetchCategoriesAction();
    fetchBadgesAction();
  }, []);

  const checkCategory = (id: number) => {
    const result = formResult.categories ?? [];
    if (result) {
      const catIndex = formResult.categories?.indexOf(id);
      if (catIndex && catIndex > -1) result.splice(catIndex, 1);
      else result.push(id);

      onFormInputChange('categories', [...result]);
    }
  };

  const onFormInputChange = (input: keyof StoreCourseBody, value: any) => {
    setFormResult({ ...formResult, [input]: value });
  };

  const onSubmit = () => storeCourseAction(formResult);

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
          <DashboardCoursesTabFormContent
            checkCategory={checkCategory}
            errors={state.validation.errors}
            onFormInputChange={onFormInputChange}
            checkedCategories={formResult.categories ?? []}
          />
          <div className='row mt-5 mb-0'>
            <div className='col'>
              <OutlinedButton className='w-100 btn-rounded' title='Reset All' />
            </div>
            <div className='col'>
              <RoundedPrimaryButton className='w-100' title='Post to Library' onClick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCoursesTab;
