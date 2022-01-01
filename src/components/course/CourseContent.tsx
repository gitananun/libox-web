import CourseBanner from './CourseBanner';
import CourseHeader from './CourseHeader';
import CourseInfoTab from './CourseInfoTab';
import CourseInstructorTab from './CourseInstructorTab';
import CourseNavTabs from './CourseNavTabs';
import CourseReviewsTab from './CourseReviewsTab';
import CourseShare from './CourseShare';

const CourseContent = () => {
  return (
    <div className='col-12 col-lg-8'>
      <CourseHeader />
      <CourseBanner />
      <CourseNavTabs />

      <div className='tab-content'>
        <CourseInfoTab />
        <CourseInstructorTab />
        <CourseReviewsTab />
      </div>

      <CourseShare />
    </div>
  );
};

export default CourseContent;
