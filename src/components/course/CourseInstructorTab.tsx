import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import CourseInstructor from './CourseInstructor';

const CourseInstructorTab = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div id='instructor' className='tab-pane'>
      <div className='row'>
        {course.instructors?.map((i) => (
          <div className='col-4 mb-3' key={i.id}>
            <div className='instructor-wrapper d-flex gap-5'>
              <CourseInstructor title={i.fullName} heading={i.jobTitle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInstructorTab;
