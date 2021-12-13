import CourseInstructor from './CourseInstructor';

const CourseInstructorTab = () => {
  return (
    <div id='instructor' className='tab-pane'>
      <div className='row'>
        <div className='col'>
          <div className='instructor-wrapper'>
            <CourseInstructor title='David Martin' heading='teacher' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructorTab;
