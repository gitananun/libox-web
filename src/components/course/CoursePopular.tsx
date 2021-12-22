import { Link } from 'react-router-dom';
import CourseSidebarSectionTitle from './CourseSidebarSectionTitle';

const CoursePopular = () => {
  const images = [
    'https://img-c.udemycdn.com/course/480x270/1026604_790b_2.jpg',
    'https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg',
    'https://img-c.udemycdn.com/course/480x270/1561458_7f3b_2.jpg',
    'https://img-b.udemycdn.com/course/480x270/246154_d8b0_3.jpg?secure=paOcnDwIDIDbRfBA0YXXuA%3D%3D%2C1639545757',
    'https://img-c.udemycdn.com/course/480x270/2459618_80a6.jpg',
  ];

  return (
    <div className='course-popular blur-container'>
      <div className='content-container text-dark'>
        <CourseSidebarSectionTitle title='Popular Courses' textColor='text-dark' />
        <hr />
        <div className='d-flex justify-content-between flex-column gap-4'>
          {images.map((img) => (
            <Link to='/courses/1' key={img} className='text-dark'>
              <div className='row course-single d-flex justify-content-center align-items-center'>
                <div className='col-4'>
                  <img src={img} alt='course' className='img-fluid' />
                </div>
                <div className='col-8'>
                  <div className='course-title'>How to become master in CSS within a week</div>
                  <div>$49</div>
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
