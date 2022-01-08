import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import { infoToast } from 'components/shared/Toast';
import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { fetchCategories, fetchCategoryCourses } from 'services/categories';
import { fetchCourses, searchCourses } from 'services/courses';
import { fetchCategoriesStateAction } from 'store/Categories/categories.actions';
import { fetchCoursesStateAction } from 'store/Courses/courses.actions';
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

  const onFetchCourses = useCallback(() => {
    let category = searchParams.get('category');
    if (!category || !+category) category = null;
    else if (categoryRef.current) categoryRef.current.value = category;

    if (title) {
      searchCourses({ title, category: category }).then((data) => dispatch(fetchCoursesStateAction(data)));
      if (titleRef.current) titleRef.current.value = title;
    } else {
      let page = searchParams.get('page');
      if (!page || !+page) page = null;
      fetchCourses({ page: page }).then((data) => dispatch(fetchCoursesStateAction(data)));
    }
  }, [dispatch, searchParams, title]);

  useEffect(() => {
    if (state.categories.categories.length === 0) {
      fetchCategories().then((data) => dispatch(fetchCategoriesStateAction(data.items)));
    }
    onFetchCourses();
  }, [dispatch, state.categories.categories.length, onFetchCourses]);

  const onSearch = () => {
    const value = titleRef.current?.value.trim();
    if (value)
      searchCourses({ title: value, category: categoryRef.current?.value }).then((data) => {
        dispatch(fetchCoursesStateAction(data));
        navigate(`/courses/search/${value}?category=${categoryRef.current?.value}`);
      });
    else infoToast('Please search with valid keyword');
  };

  const onCategory = async (slug: string, id: string) => {
    fetchCategoryCourses(slug).then((data) => dispatch(fetchCoursesStateAction(data)));
    if (categoryRef.current) categoryRef.current.value = id;
  };

  const onReset = async () => {
    navigate('/courses');
    if (categoryRef.current && titleRef.current) {
      titleRef.current.value = '';
      categoryRef.current.value = state.categories.categories[0].id.toString();
    }
    fetchCourses().then((data) => dispatch(fetchCoursesStateAction(data)));
  };

  return (
    <Layout>
      <div className='courses'>
        <div className='container d-flex flex-column justify-content-between align-items-center py-5'>
          <CoursesHeader
            onReset={onReset}
            onSearch={onSearch}
            titleRef={titleRef}
            onCategory={onCategory}
            categoryRef={categoryRef}
            title={props.dashboard ? 'My Library' : undefined}
          />
          <CoursesContent courses={state.courses.courses} />
          <PaginationNav current={state.courses.currentPage} last={state.courses.lastPage} />
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
