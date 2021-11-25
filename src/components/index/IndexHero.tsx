import heroSvg from 'assets/images/cosmo.svg';

const IndexHero = () => {
  return (
    <div className='hero' id='index-hero'>
      <div className='blur-container'>
        <div className='container px-4 py-2'>
          <div className='row flex-lg-row-reverse flex-sm-column-reverse justify-content-between align-items-center py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <img src={heroSvg} className='d-block mx-lg-auto img-fluid' alt='cosmo' loading='lazy' id='hero-svg' />
            </div>
            <div className='col-lg-6'>
              <h1
                className='display-5 fw-bold lh-1 mb-3 content-editable'
                suppressContentEditableWarning={true}
                contentEditable
              >
                Take The World's Best Library Online
              </h1>
              <p className='lead'>All your books and courses find in a single place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexHero;
