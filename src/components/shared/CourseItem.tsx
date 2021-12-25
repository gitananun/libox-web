import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import { CourseModel } from 'data/models/CourseModel';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  course: CourseModel;
}

const CourseItem = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className='card course-item'>
      <img className='card-img-top' src={props.course.imageUrl} alt='course' />
      <div className='card-body'>
        <Link to={`/courses/${props.course.slug}`}>
          <h5 className='card-title'>{props.course.title}</h5>
        </Link>
        <p className='card-text text-secondary'>
          {props.course.instructors.length !== 0 && (
            <>
              {props.course.instructors[0].jobTitle} - <a href='#link'>{props.course.instructors[0].fullName} </a>
            </>
          )}
        </p>
      </div>

      <div className='card-body d-flex justify-content-between'>
        <div className='d-flex flex-column justify-content-between'>
          <p className='course-detail'>
            <i className='fa fa-calendar'></i> - {props.course.length} hours
          </p>
          <p className='course-details'>
            <i className='fa fa-dollar-sign'></i> - {props.course.price}
          </p>
        </div>
        <RoundedPrimaryButton onClick={() => navigate(`/courses/${props.course.slug}`)} title='View More' />
      </div>
    </div>
  );
};

export default CourseItem;
