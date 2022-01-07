import IndexAbout from 'components/index/IndexAbout';
import IndexCategories from 'components/index/IndexCategories';
import IndexCourses from 'components/index/IndexCourses';
import IndexHero from 'components/index/IndexHero';
import IndexMotivation from 'components/index/IndexMotivation';
import IndexNewsletter from 'components/index/IndexNewsletter';
import IndexSearch from 'components/index/IndexSearch';
import { infoToast } from 'components/shared/Toast';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from 'services/categories';
import { fetchCourses, searchCourses } from 'services/courses';
import { fetchCategoriesAction } from 'store/Categories/categories.actions';
import { fetchCoursesAction } from 'store/Courses/courses.actions';
import store from 'store/store';
import Layout from './layouts/Layout';

const Index = () => {
  const { dispatch } = store;
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses().then((data) => dispatch(fetchCoursesAction(data)));
    fetchCategories().then((data) => dispatch(fetchCategoriesAction(data.items)));
  }, [dispatch]);

  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const onSearch = () => {
    const value = titleRef.current?.value.trim();

    value
      ? searchCourses({ title: value, category: categoryRef.current?.value }).then((data) => {
          dispatch(fetchCoursesAction(data));
          navigate(`/courses/search/${value}?category=${categoryRef.current?.value}`);
        })
      : infoToast('Please search with valid keyword');
  };

  return (
    <Layout>
      <IndexHero />
      <IndexSearch onSearch={onSearch} titleRef={titleRef} categoryRef={categoryRef} />
      <IndexCategories />
      <IndexAbout />
      <IndexCourses />
      <IndexMotivation />
      <IndexNewsletter />
    </Layout>
  );
};

export default Index;
