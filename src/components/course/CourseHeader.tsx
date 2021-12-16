import OutlinedButton from 'components/common/OutlinedButton';
import ReviewStars from 'components/common/ReviewStars';
import CourseInstructor from './CourseInstructor';

const CourseHeader = () => {
  return (
    <div className='course-header'>
      <h2 className='title mb-4'>Learn Python from scratch to hero</h2>
      <div className='row'>
        <div className='col col-detail'>
          <CourseInstructor heading='Teacher' title='David Martin' />
        </div>
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Reviews</p>
          <ReviewStars />
        </div>
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Price</p>
          <p className='text-bold'>$10.99</p>
        </div>
        <div className='col-lg col-12 col-12 col-detail border-0 text-end'>
          <OutlinedButton title='view more' className='view-more' />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
