const DashboardNavTabs = () => {
  return (
    <div className='dashboard-nav-tabs-wrapper mb-4 mb-lg-0'>
      <ul className='nav nav-tabs' role='tablist'>
        <li className='nav-item active'>
          <a className='nav-link active' href='#account' role='tab' data-toggle='tab'>
            Account
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#courses' role='tab' data-toggle='tab'>
            Courses
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#my-library' role='tab' data-toggle='tab'>
            My Library
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#password' role='tab' data-toggle='tab'>
            Password
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#help' role='tab' data-toggle='tab'>
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavTabs;
