const ScrollToTopBtn = () => {
  return (
    <button
      id='scroll-to-top'
      onClick={() => window.scrollTo(0, 0)}
      className='btn btn-primary-rounded btn-floating text-light px-4'
    >
      <i className='fa fa-angle-up'></i>
    </button>
  );
};

export default ScrollToTopBtn;
