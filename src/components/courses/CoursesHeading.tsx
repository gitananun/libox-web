import { useState } from 'react';
import CoursesHeadingTopCategories from './CoursesHeadingTopCategories';
import CoursesSearch from './CoursesSearch';

const CoursesHeading = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div className='courses-heading'>
      <div className='row text-center align-items-center mb-5'>
        <h1 className='p-0 m-0'>Courses</h1>
      </div>
      <div className='row d-flex justify-content-between align-items-center courses-navbar mb-5'>
        <div className='col filtering'>
          <i
            className={`fa fa-search icon ${showSearch && 'text-primary'}`}
            onClick={() => setShowSearch(!showSearch)}
          ></i>
          <i className='fal fa-filter icon'></i>
        </div>
        <div className='col d-flex justify-content-center'>
          <CoursesHeadingTopCategories />
        </div>
        <div className='col d-flex justify-content-end sorting'>
          <p className='sort-type'>Recency</p>
          <p className='sort-type'>Alphabetically</p>
        </div>
      </div>
      {showSearch && (
        <div className='courses-search'>
          <CoursesSearch />
        </div>
      )}
    </div>
  );
};

export default CoursesHeading;
