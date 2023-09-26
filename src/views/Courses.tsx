import { fetchCategoriesAction, fetchCategoryCoursesAction } from 'actions/categories';
import { fetchCoursesAction, searchCoursesAction } from 'actions/courses';
import CoursesContent from 'components/courses/CoursesContent';
import CoursesHeader from 'components/courses/CoursesHeader';
import PaginationNav from 'components/shared/PaginationNav';
import { infoToast } from 'components/shared/Toast';
import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { RootState } from 'store/rootReducer';
import Layout from './layouts/Layout';

interface Props {
  dashboard?: boolean;
}

const Courses = (props: Props) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const state = useSelector((state: RootState) => state);

  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const onFetchCourses = useCallback(() => {
    const category = searchParams.get('category');

    if (title) {
      searchCoursesAction({ title, category: !category || !+category ? null : category });
    } else {
      const page = searchParams.get('page');
      fetchCoursesAction({ page: !page || !+page ? null : page });
    }
  }, [searchParams, title]);

  useEffect(() => {
    if (state.categories.categories.length === 0) fetchCategoriesAction();
    onFetchCourses();
  }, [state.categories.categories.length, onFetchCourses]);

  const onSearch = () => {
    const value = titleRef.current?.value.trim();
    if (value)
      searchCoursesAction({ title: value, category: categoryRef.current?.value }).then(() =>
        navigate(`/courses/search/${value}?category=${categoryRef.current?.value}`)
      );
    else infoToast('Please search with valid keyword');
  };

  const onCategory = async (slug: string, id: string) => {
    fetchCategoryCoursesAction({ slug });
    if (categoryRef.current) categoryRef.current.value = id;
  };

  const onReset = async () => {
    navigate('/courses');
    if (categoryRef.current && titleRef.current) {
      titleRef.current.value = '';
      categoryRef.current.value = state.categories.categories[0].id.toString();
    }
    fetchCoursesAction();
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
