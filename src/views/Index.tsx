import IndexAbout from 'components/index/IndexAbout';
import IndexCategories from 'components/index/IndexCategories';
import IndexCourses from 'components/index/IndexCourses';
import IndexHero from 'components/index/IndexHero';
import IndexMotivation from 'components/index/IndexMotivation';
import IndexNewsletter from 'components/index/IndexNewsletter';
import IndexSearch from 'components/index/IndexSearch';
import { useEffect } from 'react';
import { fetchCourses } from 'services/courses';
import Layout from './layouts/Layout';

const Index = () => {
  useEffect(() => {
    fetchCourses();
  }, []);

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
