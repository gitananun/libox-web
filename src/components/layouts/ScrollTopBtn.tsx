import { useState } from 'react';

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener('scroll', () =>
    document.documentElement.scrollTop > 300 ? setVisible(true) : setVisible(false)
  );

  return (
    <button
      id='scroll-top'
      onClick={() => window.scrollTo(0, 0)}
      className={`btn btn-primary-rounded btn-floating text-light px-4 ${!visible ? 'd-none' : ''}`}
    >
      <i className='fa fa-angle-up'></i>
    </button>
  );
};

export default ScrollTopBtn;
