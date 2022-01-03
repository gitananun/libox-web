// import CoursesContent from 'components/courses/CoursesContent';
import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCourses } from 'services/courses';
import { RootState } from 'store/rootReducer';
import { fetchSearchCourses } from 'store/Search/search.actions';
import store from 'store/store';
import Layout from './layouts/Layout';

interface Props {
  dashboard?: boolean;
}

const Courses = (props: Props) => {
  const { dispatch } = store;
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    fetchCourses().then((data) => dispatch(fetchSearchCourses(data.items)));
  }, [dispatch]);

  return (
    <Layout>
      <div className='courses'>
        <div className='container d-flex flex-column justify-content-between align-items-center py-5'>
          <CoursesHeader title={props.dashboard ? 'My Library' : undefined} />
          <CoursesContent courses={state.search.courses} />
          <PaginationNav />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
