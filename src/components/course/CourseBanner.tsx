import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const CourseBanner = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return course.imageUrl ? (
    <img alt='course-banner' className='img-fluid course-banner' src={course.imageUrl} />
  ) : (
    <></>
  );
};

export default CourseBanner;
