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
        <CourseFeatureRow iconClassName='fa fa-file-invoice' title='Lessons' value='69' />
        {props.course.length && (
          <CourseFeatureRow iconClassName='fa fa-clock' title='Duration' value={`${props.course.length}`} />
        )}
        <CourseFeatureRow iconClassName='fa fa-certificate' title='Certification' value='Yes' />
        <CourseFeatureRow iconClassName='fa fa-key' title='Prerequisite' value='None' />
        {props.course.language && (
          <CourseFeatureRow iconClassName='fa fa-language' title='Language' value={props.course.language} />
        )}
        <CourseFeatureRow iconClassName='fa fa-thumbs-up' title='Skills' value='Any' />
        <CourseFeatureRow iconClassName='fa fa-file-signature' title='Assessments' value='Yes' />
        <CourseFeatureRow iconClassName='fa fa-eye' title='Viewers' value={`${props.course.likes}`} />
      </div>
      <img className='img-dotes img-fluid' src={dotes} alt='dots' />
    </div>
  );
};

export default CourseFeatures;
