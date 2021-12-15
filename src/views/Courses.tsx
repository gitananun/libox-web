import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import Layout from './layouts/Layout';

const Courses = () => {
  return (
    <Layout>
      <div className='courses'>
        <div className='container d-flex flex-column justify-content-between align-items-center py-5'>
          <CoursesHeader />
          <CoursesContent />
          <PaginationNav />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
