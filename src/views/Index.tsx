import IndexHero from 'components/index/IndexHero';
import IndexSearch from 'components/index/IndexSearch';
import Layout from './Layout';

const Index = () => {
  return (
    <Layout>
      <IndexHero />
      <IndexSearch />
    </Layout>
  );
};

export default Index;