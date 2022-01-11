import { fetchBadgesAction } from 'actions/badges';
import { fetchCategoriesAction } from 'actions/categories';

import { useEffect, useState } from 'react';
import DashboardCoursesTabFormContent from '../DashboardCoursesTabFormContent';

export interface CreateCourseFormResult {
  image: any;
  title: string;
  badge: number;
  lessons: number;
  createdAt: Date;
  updatedAt: Date;
  language: string;
  description: string;
  categories: number[];
  certification: boolean;
}

const DashboardCoursesTab = () => {
  const [formResult, setFormResult] = useState<Partial<CreateCourseFormResult>>({});

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

  const onFormInputChange = (input: keyof CreateCourseFormResult, value: any) => {
    setFormResult({ ...formResult, [input]: value });
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
          <DashboardCoursesTabFormContent
            checkCategory={checkCategory}
            onFormInputChange={onFormInputChange}
            checkedCategories={formResult.categories ?? []}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCoursesTab;
