import CoursesHeading from 'components/courses/CoursesHeading';
import Layout from './layouts/Layout';

const Courses = () => {
  return (
    <Layout>
      <div className='courses'>
        <div className='container py-5'>
          <CoursesHeading />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
