import { CourseModel } from 'data/models/CourseModel';
import CourseFeatures from './CourseFeatures';
import CoursePopular from './CoursePopular';

interface Props {
  courses: CourseModel[];
}

const CourseSidebar = (props: Props) => {
  return (
    <div className='col-12 col-lg-4 d-flex flex-column gap-4 course-sidebar'>
      <CourseFeatures />
      <CoursePopular courses={props.courses} />
    </div>
  );
};

export default CourseSidebar;
