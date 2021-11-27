import cosmo1 from 'assets/images/cosmo-1.svg';
import { mouseParallax } from 'assets/js/main';

const IndexMotivation = () => {
  return (
    <div className='section container index-motivation'>
      <div className='row align-items-center w-100'>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-start motivation-content'>
          <h1 className='display-6'>Motivation for Education</h1>
          <blockquote className='blockquote'>
            <p className='mb-4'>
              Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
            </p>
            <footer className='blockquote-footer'>Malcolm X</footer>
          </blockquote>
          <hr />
          <blockquote className='blockquote'>
            <p className='mb-4'>
              The more that you read, the more things you will know, the more that you learn, the more places you’ll
              go.”
            </p>
            <footer className='blockquote-footer'>Dr. Seuss</footer>
          </blockquote>
        </div>
        <div className='col-12 col-md-6 text-center d-flex justify-content-center' onMouseOver={mouseParallax}>
          <img alt='rocket' id='motivation-svg' src={cosmo1} loading='lazy' data-depth='0.3' className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default IndexMotivation;
