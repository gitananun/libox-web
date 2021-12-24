import { CourseModelPropsInterface } from 'components/interfaces/Props';
import CourseBanner from './CourseBanner';
import CourseHeader from './CourseHeader';
import CourseInfoTab from './CourseInfoTab';
import CourseInstructorTab from './CourseInstructorTab';
import CourseNavTabs from './CourseNavTabs';
import CourseReviewsTab from './CourseReviewsTab';
import CourseShare from './CourseShare';

const CourseContent = (props: CourseModelPropsInterface) => {
  console.log(props.course);
  return (
    <div className='col-12 col-lg-8'>
      <CourseHeader course={props.course} />
      <CourseBanner course={props.course} />
      <CourseNavTabs course={props.course} />

      <div className='tab-content'>
        <CourseInfoTab course={props.course} />
        <CourseInstructorTab course={props.course} />
        <CourseReviewsTab course={props.course} />
      </div>

      <CourseShare />
    </div>
  );
};

export default CourseContent;
