import CourseFeatureRow from './CourseFeatureRow';
import dotes from 'assets/images/dotes.png';

const CourseFeatures = () => {
  return (
    <div className='features'>
      <div className='content-container text-light'>
        <p className='title'>Course features</p>
        <hr className='mt-2 mb-4' />
        <CourseFeatureRow />
        <CourseFeatureRow />
        <CourseFeatureRow />
        <CourseFeatureRow />
        <CourseFeatureRow />
      </div>
      <img className='img-dotes img-fluid' src={dotes} alt='dots' />
    </div>
  );
};

export default CourseFeatures;
