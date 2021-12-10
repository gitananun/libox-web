const CourseNavTabs = () => {
  return (
    <div className='course-details-nav-wrapper'>
      <ul className='nav nav-tabs' role='tablist'>
        <li className='nav-item active'>
          <a className='nav-link active' href='#information' role='tab' data-toggle='tab'>
            Information
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#curricularm' role='tab' data-toggle='tab'>
            Curricularm
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#instructor' role='tab' data-toggle='tab'>
            Instructor
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#reviews' role='tab' data-toggle='tab'>
            Reviews
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CourseNavTabs;
