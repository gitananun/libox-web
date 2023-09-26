import CircularIcon from 'components/common/CircularIcon';

const CourseShare = () => {
  return (
    <div className='share-section mt-5'>
      <div className='row'>
        <div className='col d-flex justify-content-start align-items-center gap-2'>
          <p className='title'>Share:</p>
          <ul className='list-unstyled d-flex gap-2 m-0'>
            <li>
              <a href='#facebook'>
                <CircularIcon iconClassName='fab fa-facebook-f' />
              </a>
            </li>
            <li>
              <a href='#facebook'>
                <CircularIcon iconClassName='fab fa-google' />
              </a>
            </li>
            <li>
              <a href='#facebook'>
                <CircularIcon iconClassName='fab fa-twitter' />
              </a>
            </li>
            <li>
              <a href='#facebook'>
                <CircularIcon iconClassName='fab fa-linkedin' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseShare;
