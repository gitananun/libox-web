import IndexAbout from 'components/index/IndexAbout';
import IndexCategories from 'components/index/IndexCategories';
import IndexCourses from 'components/index/IndexCourses';
import IndexHero from 'components/index/IndexHero';
import IndexMotivation from 'components/index/IndexMotivation';
import IndexNewsletter from 'components/index/IndexNewsletter';
import IndexSearch from 'components/index/IndexSearch';
import { useEffect } from 'react';
import { fetchCategories } from 'services/categories';
import { fetchCourses } from 'services/courses';
import { fetchCategoriesAction } from 'store/Categories/categories.actions';
import { fetchCoursesAction } from 'store/Courses/courses.actions';
import store from 'store/store';
import Layout from './layouts/Layout';

const Index = () => {
  const { dispatch } = store;

  useEffect(() => {
    fetchCourses().then((data) => dispatch(fetchCoursesAction(data.items)));
    fetchCategories().then((data) => dispatch(fetchCategoriesAction(data.items)));
  }, [dispatch]);

  return (
    <Layout>
      <IndexHero />
      <IndexSearch />
      <IndexCategories />
      <IndexAbout />
      <IndexCourses />
      <IndexMotivation />
      <IndexNewsletter />
    </Layout>
  );
};

export default Index;
