import { CourseModelPropsInterface } from 'components/interfaces/Props';
import CourseInstructor from './CourseInstructor';

const CourseInstructorTab = (props: CourseModelPropsInterface) => {
  return (
    <div id='instructor' className='tab-pane'>
      <div className='row'>
        <div className='col'>
          <div className='instructor-wrapper d-flex gap-5'>
            {props.course.instructors.map((i) => (
              <CourseInstructor key={i.id} title={i.fullName} heading={i.jobTitle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructorTab;
