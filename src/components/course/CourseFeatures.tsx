import CourseFeatureRow from './CourseFeatureRow';
import dotes from 'assets/images/dotes.png';
import CourseSidebarSectionTitle from './CourseSidebarSectionTitle';
import { CourseModelPropsInterface } from 'components/interfaces/Props';

const CourseFeatures = (props: CourseModelPropsInterface) => {
  return (
    <div className='course-features'>
      <div className='content-container text-light'>
        <CourseSidebarSectionTitle title='Course Features' />
        <hr className='mt-2 mb-4' />
        {props.course.lessons && (
          <CourseFeatureRow iconClassName='fa fa-file-invoice' title='Lessons' value={`${props.course.lessons}`} />
        )}
        {props.course.length && (
          <CourseFeatureRow iconClassName='fa fa-clock' title='Duration' value={`${props.course.length}`} />
        )}
        <CourseFeatureRow
          title='Certification'
          iconClassName='fa fa-certificate'
          value={props.course.certification ? 'Yes' : 'No'}
        />

        {props.course.language && (
          <CourseFeatureRow iconClassName='fa fa-language' title='Language' value={props.course.language} />
        )}
        {props.course.viewers && (
          <CourseFeatureRow iconClassName='fa fa-eye' title='Viewers' value={`${props.course.viewers}`} />
        )}
      </div>
      <img className='img-dotes img-fluid' src={dotes} alt='dots' />
    </div>
  );
};

export default CourseFeatures;
