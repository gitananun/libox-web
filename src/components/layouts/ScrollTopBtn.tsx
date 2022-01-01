import { useEffect, useState } from 'react';

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      document.documentElement.scrollTop > 300 ? setVisible(true) : setVisible(false)
    );
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <button
      id='scroll-top'
      onClick={() => window.scrollTo(0, 0)}
      className={`btn btn-floating ${!visible ? 'd-none' : ''}`}
    >
      <i className='fa fa-rocket text-primary'></i>
    </button>
  );
};

export default ScrollTopBtn;
