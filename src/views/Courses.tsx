import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchCourses, searchCourses } from 'services/courses';
import { fetchCoursesAction } from 'store/Courses/courses.actions';
import { RootState } from 'store/rootReducer';
import store from 'store/store';
import Layout from './layouts/Layout';

interface Props {
  dashboard?: boolean;
}

const Courses = (props: Props) => {
  const { dispatch } = store;
  const { title } = useParams();
  const [searchParams] = useSearchParams();
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    let category = searchParams.get('category');
    if (!category || !+category) category = null;

    title
      ? searchCourses({ title, category: category }).then((data) => dispatch(fetchCoursesAction(data.items)))
      : fetchCourses().then((data) => dispatch(fetchCoursesAction(data.items)));
  }, [dispatch, title, searchParams]);

  return (
    <Layout>
      <div className='courses'>
        <div className='container d-flex flex-column justify-content-between align-items-center py-5'>
          <CoursesHeader title={props.dashboard ? 'My Library' : undefined} />
          <CoursesContent courses={state.courses.courses} />
          <PaginationNav />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
