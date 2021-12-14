const CoursesHeadingTopCategories = () => {
  return (
    <div className='courses-nav-tabs-wrapper'>
      <ul className='nav nav-tabs' role='tablist'>
        <li className='nav-item active'>
          <p className='nav-link active' role='tab' data-toggle='tab'>
            Development
          </p>
        </li>
        <li className='nav-item'>
          <p className='nav-link' role='tab' data-toggle='tab'>
            Programming
          </p>
        </li>
        <li className='nav-item'>
          <p className='nav-link' role='tab' data-toggle='tab'>
            QA
          </p>
        </li>
        <li className='nav-item'>
          <p className='nav-link' role='tab' data-toggle='tab'>
            Project Management
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CoursesHeadingTopCategories;
