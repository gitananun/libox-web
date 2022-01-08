import { fetchCourseAction, fetchCoursesAction } from 'actions/courses';
import CourseContent from 'components/course/CourseContent';
import CourseSidebar from 'components/course/CourseSidebar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from 'store/rootReducer';
import Layout from './layouts/Layout';

const Course = () => {
  const { slug } = useParams();

  const course = useSelector((state: RootState) => state.course.course);

  useEffect(() => {
    if (slug) {
      fetchCourseAction({ slug });
      fetchCoursesAction({ scope: 'popular' });
    }
  }, [slug]);

  return (
    <Layout>
      <div className='course-details'>
        <div className='container wrapper'>
          <div className='row m-0'>
            {course && (
              <>
                <CourseContent />
                <CourseSidebar />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
