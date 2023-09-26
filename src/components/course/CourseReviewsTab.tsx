import ReviewStars from 'components/common/ReviewStars';
import reviewSvg from 'assets/images/review.svg';
import { mouseParallax } from 'assets/js/main';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const CourseReviewsTab = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div id='reviews' className='tab-pane course-review'>
      <div className='row'>
        <div className='col-6'>
          <p className='review-score'>{course.rating}</p>
          {course.rating && <ReviewStars className='review-star-lg' rating={course.rating} />}
          <p>{course.likes} Likes</p>
        </div>
        <div className='col-6' onMouseOver={mouseParallax}>
          <img className='img-fluid' src={reviewSvg} data-depth='0.8' alt='review' />
        </div>
      </div>
    </div>
  );
};

export default CourseReviewsTab;
