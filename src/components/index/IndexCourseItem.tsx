import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';

const IndexCourseItem = () => {
  return (
    <div className='card index-course-item'>
      <img className='card-img-top' src='https://img-c.udemycdn.com/course/480x270/1035000_c1aa_6.jpg' alt='course' />
      <div className='card-body'>
        <h5 className='card-title'>Docker Mastery: with Kubernetes +Swarm from a Docker Captain</h5>
        <p className='card-text text-secondary'>
          Teacher - <a href='#link'>John Back</a>
        </p>
      </div>

      <div className='card-body d-flex justify-content-between'>
        <div className='d-flex flex-column justify-content-between'>
          <p className='course-detail'>
            <i className='fa fa-calendar'></i> - 48 hours
          </p>
          <p className='course-details'>
            <i className='fa fa-dollar-sign'></i> - 9.99
          </p>
        </div>
        <RoundedPrimaryButton title='View More' />
      </div>
    </div>
  );
};

export default IndexCourseItem;
