import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const CourseInfoTab = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div id='information' className='tab-pane in active'>
      {course.categories?.length !== 0 && (
        <div className='tab-section d-flex'>
          {course.categories?.map((c, i) => (
            <div key={c.id}>
              <small className='text-primary'>{c.name}</small>
              {course.categories!.length - 1 !== i && <span className='text-secondary mx-2'>/</span>}
            </div>
          ))}
        </div>
      )}
      <div className='tab-section'>
        <h3 className='title'>Course Description</h3>
        <p className='text-secondary'>{course.description}</p>
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
