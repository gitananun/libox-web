import CourseBanner from './CourseBanner';
import CourseCurricTab from './CourseCurricTab';
import CourseHeader from './CourseHeader';
import CourseInfoTab from './CourseInfoTab';
import CourseInstructorTab from './CourseInstructorTab';
import CourseNavTabs from './CourseNavTabs';
import CourseReviewsTab from './CourseReviewsTab';

const CourseContent = () => {
  return (
    <div className='col-12 col-lg-8'>
      <CourseHeader />
      <CourseBanner />
      <CourseNavTabs />

      <div className='tab-content'>
        <CourseInfoTab />
        <CourseCurricTab />
        <CourseInstructorTab />
        <CourseReviewsTab />
      </div>
    </div>
  );
};

export default CourseContent;
