const DashboardNavTabs = () => {
  return (
    <div className='dashboard-nav-tabs-wrapper'>
      <ul className='nav nav-tabs' role='tablist'>
        <li className='nav-item active'>
          <a className='nav-link active' href='#account' role='tab' data-toggle='tab'>
            Account
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