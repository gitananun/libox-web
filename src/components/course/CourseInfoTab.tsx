import { CourseModelPropsInterface } from 'components/interfaces/Props';

const CourseInfoTab = (props: CourseModelPropsInterface) => {
  return (
    <div id='information' className='tab-pane in active'>
      <div className='tab-section'>
        <h3 className='title'>Course Description</h3>
        <p className='text-secondary'>{props.course.description}</p>
      </div>
      <div className='tab-section'>
        <h3 className='title'>Our Objectives</h3>
        <p className='text-secondary'>
          Libox provides you with resources in order to have a grow in your future profession. This is the platform
          where you can find everything needed for self-education. Be consistent and mindful 🐳
        </p>
      </div>
    </div>
  );
};

export default CourseInfoTab;
