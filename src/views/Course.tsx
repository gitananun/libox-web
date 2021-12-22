import CourseContent from 'components/course/CourseContent';
import CourseSidebar from 'components/course/CourseSidebar';
import { CourseModel } from 'data/models/CourseModel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCourse } from 'services/courses';
import Layout from './layouts/Layout';

const Course = () => {
  let { slug } = useParams();
  const [course, setCourse] = useState<CourseModel>();

  useEffect(() => {
    if (slug) fetchCourse(slug).then((c) => setCourse(c.body));
    return () => setCourse(undefined);
  }, [slug]);

  return (
    <Layout>
      <div className='course-details'>
        <div className='container wrapper'>
          <div className='row m-0'>
            {course && (
              <>
                <CourseContent course={course} />
                <CourseSidebar course={course} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
