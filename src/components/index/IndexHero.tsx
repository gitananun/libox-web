import heroSvg from 'assets/images/cosmo.svg';
import RoundedPrimaryButton from 'components/common/RoundedPrimaryButton';
import { mouseParallax } from 'assets/js/main';

const IndexHero = () => {
  return (
    <div className='hero' id='index-hero'>
      <div className='blur-container pb-lg-5'>
        <div className='container px-4 py-2'>
          <div className='row flex-lg-row-reverse justify-content-between align-items-center py-5'>
            <div className='col-10 col-sm-8 col-lg-6' onMouseOver={mouseParallax}>
              <img
                alt='cosmo'
                id='hero-svg'
                src={heroSvg}
                loading='lazy'
                data-depth='0.8'
                className='d-block mx-lg-auto img-fluid'
              />
            </div>
            <div className='col-lg-6 justify-content-between content'>
              <h1
                className='display-5 fw-bold lh-1 mb-3 content-editable'
                suppressContentEditableWarning={true}
                contentEditable
              >
                Take The World's Best Library Online
              </h1>
              <p className='lead'>All your books and courses find in a single place</p>
              <RoundedPrimaryButton title='get started for free' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexHero;
