import Layout from './Layout';
import { mouseParallax } from 'assets/js/main';
import earthSvg from 'assets/images/earth.svg';
import marsSvg from 'assets/images/mars.svg';
import moonSvg from 'assets/images/moon.svg';

const NotFound = () => {
  return (
    <Layout>
      <div className='container not-found text-center align-items-center'>
        <div className='row images-row'>
          <div className='col-1'></div>
          <div className='col-3 d-flex' onMouseOver={mouseParallax}>
            <img alt='earth' src={marsSvg} loading='lazy' data-depth='0.5' className='d-block img-fluid' />
          </div>
          <div className='col-4 d-flex' onMouseOver={mouseParallax}>
            <img alt='earth' src={earthSvg} loading='lazy' data-depth='0.5' className='d-block img-fluid' />
          </div>
          <div className='col-3 d-flex' onMouseOver={mouseParallax}>
            <img alt='earth' src={moonSvg} loading='lazy' data-depth='0.5' className='d-block img-fluid' />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <h1 className='title'>Whoops! Lost in Space?</h1>
          </div>
          <div className='col-12 mt-3'>
            <p className='text-secondary'>
              The page you're looking for isn't found :( <br /> We suggest you back to home
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
