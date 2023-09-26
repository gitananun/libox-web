import { fetchCategoriesAction } from 'actions/categories';
import { fetchCoursesAction, searchCoursesAction } from 'actions/courses';
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
import Layout from './layouts/Layout';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchCoursesAction();
    fetchCategoriesAction();
  });

  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const onSearch = () => {
    const value = titleRef.current?.value.trim();

    if (value)
      searchCoursesAction({ title: value, category: categoryRef.current?.value }).then(() =>
        navigate(`/courses/search/${value}?category=${categoryRef.current?.value}`)
      );
    else infoToast('Please search with valid keyword');
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
