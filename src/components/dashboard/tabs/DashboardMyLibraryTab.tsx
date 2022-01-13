import CourseItem from '../../shared/CourseItem';
import { fetchSelfCoursesAction } from 'actions/courses';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import PaginationNav from 'components/shared/PaginationNav';
import { useSearchParams } from 'react-router-dom';

const DashboardMyLibraryTab = () => {
  const [searchParams] = useSearchParams();
  const state = useSelector((state: RootState) => state);

  const onFetchCourses = useCallback(() => {
    const page = searchParams.get('page');
    fetchSelfCoursesAction({ page: !page || !+page ? null : page });
  }, [searchParams]);

  useEffect(() => {
    onFetchCourses();
  }, [onFetchCourses]);

  return (
    <div id='my-library' className='tab-pane'>
      <p className='title'>My Library</p>
      <div className='section'>
        <div className='header'>
          <p className='section-title'>It's powerful to deveolp</p>
          <p className='section-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda, omnis obcaecati dolore in pariatur
            beatae est vel commodi eveniet, quibusdam ab exercitationem dignissimos! Recusandae fugiat sit ea ad quis?
          </p>
        </div>
        <div className='content'>
          <div className='row'>
            {state.courses.courses.map((c) => (
              <CourseItem course={c} key={c.id} className='course-item-small m-3' />
            ))}
          </div>
          <PaginationNav current={state.courses.currentPage} last={state.courses.currentPage} />
        </div>
      </div>
    </div>
  );
};

export default DashboardMyLibraryTab;
