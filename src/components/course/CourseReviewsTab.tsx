import ReviewStars from 'components/common/ReviewStars';
import reviewSvg from 'assets/images/review.svg';
import { mouseParallax } from 'assets/js/main';

const CourseReviewsTab = () => {
  return (
    <div id='reviews' className='tab-pane course-review'>
      <div className='row'>
        <div className='col-6'>
          <p className='review-score'>5</p>
          <ReviewStars className='review-star-lg' />
          <p>8 Ratings</p>
        </div>
        <div className='col-6' onMouseOver={mouseParallax}>
          <img className='img-fluid' src={reviewSvg} data-depth='0.8' alt='review' />
        </div>
      </div>
    </div>
  );
};

export default CourseReviewsTab;
