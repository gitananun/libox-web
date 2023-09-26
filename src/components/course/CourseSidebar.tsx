import CourseFeatures from './CourseFeatures';
import CoursePopular from './CoursePopular';

const CourseSidebar = () => {
  return (
    <div className='col-12 col-lg-4 d-flex flex-column gap-4 course-sidebar'>
      <CourseFeatures />
      <CoursePopular />
    </div>
  );
};

export default CourseSidebar;
