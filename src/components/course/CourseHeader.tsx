import OutlinedButton from 'components/common/OutlinedButton';
import ReviewStars from 'components/common/ReviewStars';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import CourseInstructor from './CourseInstructor';

const CourseHeader = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div className='course-header'>
      <h2 className='title mb-4'>{course.title}</h2>
      <div className='row'>
        {course.instructors?.length !== 0 && course.instructors && (
          <div className='col col-detail'>
            <CourseInstructor heading={course.instructors[0].jobTitle} title={course.instructors[0].fullName} />
          </div>
        )}
        {course.rating && (
          <div className='col col-detail'>
            <p className='text-secondary detail-title'>Reviews</p>
            <ReviewStars rating={course.rating} />
          </div>
        )}
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Price</p>
          <p className='text-bold'>$ {course.price}</p>
        </div>
        <div className='col-lg col-12 col-12 col-detail border-0 text-end'>
          <OutlinedButton title='view more' className='view-more' />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
