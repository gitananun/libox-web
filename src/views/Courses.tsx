import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import { infoToast } from 'components/shared/Toast';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { fetchCategories } from 'services/categories';
import { fetchCourses, searchCourses } from 'services/courses';
import { fetchCategoriesAction } from 'store/Categories/categories.actions';
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const state = useSelector((state: RootState) => state);

  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (state.categories.categories.length === 0) {
      fetchCategories().then((data) => dispatch(fetchCategoriesAction(data.items)));
    }

    let category = searchParams.get('category');
    if (!category || !+category) category = null;
    else if (categoryRef.current) categoryRef.current.value = category;

    if (title) {
      searchCourses({ title, category: category }).then((data) => dispatch(fetchCoursesAction(data.items)));
      if (titleRef.current) titleRef.current.value = title;
    } else fetchCourses().then((data) => dispatch(fetchCoursesAction(data.items)));
  }, [dispatch, title, searchParams, state.categories.categories]);

  const onSearch = () => {
    const value = titleRef.current?.value.trim();

    value
      ? searchCourses({ title: value, category: categoryRef.current?.value }).then((data) => {
          dispatch(fetchCoursesAction(data.items));
          navigate(`/courses/search/${value}?category=${categoryRef.current?.value}`);
        })
      : infoToast('Please search with valid keyword');
  };

  return (
    <Layout>
      <div className='courses'>
        <div className='container d-flex flex-column justify-content-between align-items-center py-5'>
          <CoursesHeader
            title={props.dashboard ? 'My Library' : undefined}
            onSearch={onSearch}
            titleRef={titleRef}
            categoryRef={categoryRef}
          />
          <CoursesContent courses={state.courses.courses} />
          <PaginationNav />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
