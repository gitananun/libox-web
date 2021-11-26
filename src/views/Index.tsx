import IndexAbout from 'components/index/IndexAbout';
import IndexCategories from 'components/index/IndexCategories';
import IndexHero from 'components/index/IndexHero';
import IndexSearch from 'components/index/IndexSearch';
import Layout from './Layout';

const Index = () => {
  return (
    <Layout>
      <IndexHero />
      <IndexSearch />
      <IndexCategories />
      <IndexAbout />
    </Layout>
  );
};

export default Index;
