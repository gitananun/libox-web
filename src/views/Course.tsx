import CourseContent from 'components/course/CourseContent';
import CourseSidebar from 'components/course/CourseSidebar';
import Layout from './layouts/Layout';

const Course = () => {
  return (
    <Layout>
      <div className='course-details'>
        <div className='container wrapper'>
          <div className='row m-0'>
            <CourseContent />
            <CourseSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
