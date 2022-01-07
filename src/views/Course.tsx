import CourseContent from 'components/course/CourseContent';
import CourseSidebar from 'components/course/CourseSidebar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCourse, fetchCourses } from 'services/courses';
import { fetchCourseAction } from 'store/Course/course.actions';
import { fetchPopularCoursesAction } from 'store/Courses/courses.actions';
import { RootState } from 'store/rootReducer';
import store from 'store/store';
import Layout from './layouts/Layout';

const Course = () => {
  const { slug } = useParams();

  const { dispatch } = store;
  const course = useSelector((state: RootState) => state.course.course);

  useEffect(() => {
    if (slug) {
      fetchCourse(slug).then((data) => dispatch(fetchCourseAction(data.body)));
      fetchCourses({ scope: 'popular' }).then((data) => dispatch(fetchPopularCoursesAction(data.items)));
    }
  }, [slug, dispatch]);

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
