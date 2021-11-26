import { mouseParallax } from 'assets/js/main';
import rocketSvg from 'assets/images/rocket.svg';

const IndexAbout = () => {
  return (
    <div className='overflow-hidden'>
      <div className='container section index-about'>
        <div className='bg-block'></div>
        <div className='about-wrapper'>
          <div className='row align-items-center w-100'>
            <div className='col-12 col-md-6 text-center d-flex justify-content-center' onMouseOver={mouseParallax}>
              <img alt='rocket' id='about-svg' src={rocketSvg} loading='lazy' data-depth='0.3' className='img-fluid' />
            </div>
            <div className='col-12 col-md-6 about-content'>
              <h1 className='display-6'>Online Library Box</h1>
              <p className='lead'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aspernatur laborum modi fugiat suscipit
                perferendis expedita. Officiis, quibusdam dolorem nihil veritatis voluptates vitae nostrum. Dolores
                dicta pariatur in ipsa facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexAbout;
