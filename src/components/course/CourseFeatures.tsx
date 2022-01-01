import CourseFeatureRow from './CourseFeatureRow';
import dotes from 'assets/images/dotes.png';
import CourseSidebarSectionTitle from './CourseSidebarSectionTitle';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const CourseFeatures = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div className='course-features'>
      <div className='content-container text-light'>
        <CourseSidebarSectionTitle title='Course Features' />
        <hr className='mt-2 mb-4' />
        {course.lessons && (
          <CourseFeatureRow iconClassName='fa fa-file-invoice' title='Lessons' value={`${course.lessons}`} />
        )}
        {course.length && <CourseFeatureRow iconClassName='fa fa-clock' title='Duration' value={`${course.length}`} />}
        <CourseFeatureRow
          title='Certification'
          iconClassName='fa fa-certificate'
          value={course.certification ? 'Yes' : 'No'}
        />

        {course.language && (
          <CourseFeatureRow iconClassName='fa fa-language' title='Language' value={course.language} />
        )}
        {course.viewers && <CourseFeatureRow iconClassName='fa fa-eye' title='Viewers' value={`${course.viewers}`} />}
      </div>
      <img className='img-dotes img-fluid' src={dotes} alt='dots' />
    </div>
  );
};

export default CourseFeatures;
