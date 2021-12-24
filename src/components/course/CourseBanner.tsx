import { CourseModelPropsInterface } from 'components/interfaces/Props';

const CourseBanner = (props: CourseModelPropsInterface) =>
  props.course.imageUrl ? (
    <img alt='course-banner' className='img-fluid course-banner' src={props.course.imageUrl} />
  ) : (
    <></>
  );

export default CourseBanner;
