import OutlinedButton from 'components/common/OutlinedButton';
import ReviewStars from 'components/common/ReviewStars';
import { CourseModelPropsInterface } from 'components/interfaces/Props';
import CourseInstructor from './CourseInstructor';

const CourseHeader = (props: CourseModelPropsInterface) => {
  return (
    <div className='course-header'>
      <h2 className='title mb-4'>{props.course.title}</h2>
      <div className='row'>
        {props.course.instructors.length !== 0 && (
          <div className='col col-detail'>
            <CourseInstructor
              heading={props.course.instructors[0].jobTitle}
              title={props.course.instructors[0].fullName}
            />
          </div>
        )}
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Reviews</p>
          <ReviewStars rating={props.course.rating} />
        </div>
        <div className='col col-detail'>
          <p className='text-secondary detail-title'>Price</p>
          <p className='text-bold'>$ {props.course.price}</p>
        </div>
        <div className='col-lg col-12 col-12 col-detail border-0 text-end'>
          <OutlinedButton title='view more' className='view-more' />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
