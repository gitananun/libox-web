import { CourseModelPropsInterface } from 'components/interfaces/Props';
import CourseFeatures from './CourseFeatures';
import CoursePopular from './CoursePopular';

const CourseSidebar = (props: CourseModelPropsInterface) => {
  return (
    <div className='col-12 col-lg-4 d-flex flex-column gap-4 course-sidebar'>
      <CourseFeatures course={props.course} />
      <CoursePopular />
    </div>
  );
};

export default CourseSidebar;
