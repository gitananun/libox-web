import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/rootReducer';
import CourseSidebarSectionTitle from './CourseSidebarSectionTitle';

const CoursePopular = () => {
  const popular = useSelector((state: RootState) => state.courses.popular);

  return (
    <div className='course-popular blur-container'>
      <div className='content-container text-dark'>
        <CourseSidebarSectionTitle title='Popular Courses' textColor='text-dark' />
        <hr />
        <div className='d-flex justify-content-between flex-column gap-4'>
          {popular.map((c) => (
            <Link to='/courses/1' key={c.id} className='text-dark'>
              <div className='row course-single d-flex justify-content-center align-items-center'>
                {c.imageUrl && (
                  <div className='col-4'>
                    <img src={c.imageUrl} alt='course' className='img-fluid' />
                  </div>
                )}
                <div className='col-8'>
                  <div className='course-title'>{c.title}</div>
                  <div>${c.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePopular;
