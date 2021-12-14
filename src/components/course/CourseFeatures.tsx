import CourseFeatureRow from './CourseFeatureRow';
import dotes from 'assets/images/dotes.png';
import CourseSidebarSectionTitle from './CourseSidebarSectionTitle';

const CourseFeatures = () => {
  return (
    <div className='course-features'>
      <div className='content-container text-light'>
        <CourseSidebarSectionTitle title='Course Features' />
        <hr className='mt-2 mb-4' />
        <CourseFeatureRow iconClassName='fa fa-file-invoice' title='Lessons' value='69' />
        <CourseFeatureRow iconClassName='fa fa-clock' title='Duration' value='49' />
        <CourseFeatureRow iconClassName='fa fa-certificate' title='Certification' value='Yes' />
        <CourseFeatureRow iconClassName='fa fa-key' title='Prerequisite' value='None' />
        <CourseFeatureRow iconClassName='fa fa-language' title='Language' value='Eng' />
        <CourseFeatureRow iconClassName='fa fa-thumbs-up' title='Skills' value='Any' />
        <CourseFeatureRow iconClassName='fa fa-file-signature' title='Assessments' value='Yes' />
        <CourseFeatureRow iconClassName='fa fa-eye' title='Viewers' value='190' />
      </div>
      <img className='img-dotes img-fluid' src={dotes} alt='dots' />
    </div>
  );
};

export default CourseFeatures;
