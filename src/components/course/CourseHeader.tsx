import OutlinedButton from 'components/common/OutlinedButton';
import ReviewStars from 'components/common/ReviewStars';

const CourseHeader = () => {
  return (
    <div className='course-header'>
      <h2 className='title mb-4'>Learn Python from scratch to hero</h2>
      <div className='row'>
        <div className='col col-detail'>
          <div className='d-flex'>
            <img
              alt='avatar'
              className='avatar'
              src='https://cdn.pixabay.com/photo/2015/08/25/10/40/ben-knapen-906550_960_720.jpg'
            />
            <div>
              <p className='text-secondary detail-title'>Teacher</p>
              <p className='text-uppercase text-bold'>David Martin</p>
            </div>
          </div>
        </div>
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Reviews</p>
          <ReviewStars />
        </div>
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Price</p>
          <p className='text-bold'>$10.99</p>
        </div>
        <div className='col col-detail border-0 text-end'>
          <OutlinedButton title='view more' />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
