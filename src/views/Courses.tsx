// import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import Layout from './layouts/Layout';

interface Props {
  dashboard?: boolean;
}

const Courses = (props: Props) => {
  return (
    <Layout>
      <div className='courses'>
        <div className='container d-flex flex-column justify-content-between align-items-center py-5'>
          <CoursesHeader title={props.dashboard ? 'My Library' : undefined} />
          {/* <CoursesContent /> */}
          <PaginationNav />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
