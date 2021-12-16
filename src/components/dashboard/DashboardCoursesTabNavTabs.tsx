const DashboardCoursesTabNavTabs = () => {
  return (
    <div className='dashboard-courses-nav-tabs-wrapper mb-4 mb-lg-0'>
      <ul className='nav nav-tabs' role='tablist'>
        <li className='nav-item active'>
          <a className='nav-link active' href='#my' role='tab' data-toggle='tab'>
            My Library
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#favorite' role='tab' data-toggle='tab'>
            Favorite
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#create' role='tab' data-toggle='tab'>
            Make new course
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#manage' role='tab' data-toggle='tab'>
            Manage courses
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardCoursesTabNavTabs;
