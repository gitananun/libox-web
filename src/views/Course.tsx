import CourseContent from 'components/course/CourseContent';
import CourseSidebar from 'components/course/CourseSidebar';
import { CourseModel } from 'data/models/CourseModel';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCourse, fetchCourses } from 'services/courses';
import { fetchCourseAction } from 'store/Course/course.actions';
import { RootState } from 'store/rootReducer';
import store from 'store/store';
import Layout from './layouts/Layout';

const Course = () => {
  const { dispatch } = store;
  const state = useSelector((state: RootState) => state);

  let { slug } = useParams();
  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    if (slug) {
      fetchCourse(slug).then((c) => dispatch(fetchCourseAction(c.body)));
      fetchCourses('popular').then((c) => setCourses(c.items));
    }
  }, [slug, dispatch]);

  return (
    <Layout>
      <div className='course-details'>
        <div className='container wrapper'>
          <div className='row m-0'>
            {state.course.course && (
              <>
                <CourseContent />
                <CourseSidebar courses={courses} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
