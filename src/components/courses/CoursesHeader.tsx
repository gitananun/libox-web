import { useState } from 'react';
import { copyToClipboard } from 'utils/shared';
import CoursesHeadingTopCategories from './CoursesHeadingTopCategories';
import CoursesSearch from './CoursesSearch';

interface Props {
  title?: string;
  onReset(): void;
  onSearch: React.MouseEventHandler;
  onCategory(slug: string, id: string): void;
  titleRef: React.LegacyRef<HTMLInputElement>;
  categoryRef: React.LegacyRef<HTMLSelectElement>;
}

const CoursesHeader = (props: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='courses-heading w-100'>
      <div className='row text-center align-items-center mb-5'>
        <h1 className='p-0 m-0'>{props.title || 'Courses'}</h1>
      </div>
      <div className='row d-flex justify-content-between align-items-center courses-navbar mb-4'>
        <div className='col filtering'>
          <i
            className={`fal fa-search icon ${showSearch && 'text-primary'}`}
            onClick={() => setShowSearch(!showSearch)}
          ></i>
          <i className='fal fa-filter icon'></i>
        </div>
        <div className='col d-flex justify-content-center categories'>
          <CoursesHeadingTopCategories onCategory={props.onCategory} />
        </div>
        <div className='col d-flex justify-content-lg-end shareing'>
          <p className='share-type'>
            <i className='fal fa-redo' onClick={props.onReset}></i>
          </p>
          <p className='share-type'>
            <i className='fal fa-copy' onClick={() => copyToClipboard(window.location.href)}></i>
          </p>
        </div>
      </div>
      {showSearch && (
        <div className='courses-search d-flex align-items-center justify-content-center'>
          <CoursesSearch onSearch={props.onSearch} titleRef={props.titleRef} categoryRef={props.categoryRef} />
        </div>
      )}
    </div>
  );
};

export default CoursesHeader;
