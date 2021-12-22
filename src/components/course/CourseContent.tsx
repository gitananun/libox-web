import { CourseModelPropsInterface } from 'components/interfaces/Props';
import CourseBanner from './CourseBanner';
import CourseHeader from './CourseHeader';
import CourseInfoTab from './CourseInfoTab';
import CourseInstructorTab from './CourseInstructorTab';
import CourseNavTabs from './CourseNavTabs';
import CourseReviewsTab from './CourseReviewsTab';
import CourseShare from './CourseShare';

const CourseContent = (props: CourseModelPropsInterface) => {
  return (
    <div className='col-12 col-lg-8'>
      <CourseHeader course={props.course} />
      <CourseBanner />
      <CourseNavTabs />

      <div className='tab-content'>
        <CourseInfoTab course={props.course} />
        <CourseInstructorTab />
        <CourseReviewsTab course={props.course} />
      </div>

      <CourseShare />
    </div>
  );
};

export default CourseContent;
