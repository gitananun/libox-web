import { Swiper as Swp, SwiperSlide } from 'swiper/react';
import Swiper, { Autoplay, Navigation } from 'swiper';

import 'swiper/swiper.min.css';

const quotes = [
  {
    quote:
      'If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people',
    by: 'Chinese Proverb',
  },
  {
    quote:
      'The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education',
    by: 'Martin Luther King',
  },
  {
    quote: 'The beautiful thing about learning is that no one can take it away from you',
    by: 'B.B.King',
  },
];

const AuthBannerContent = () => {
  Swiper.use([Autoplay, Navigation]);

  return (
    <Swp
      grabCursor={true}
      slidesPerView={'auto'}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
    >
      {quotes.map((v) => (
        <SwiperSlide key={v.by} className='swiper-slide'>
          <div className='blur-container mb-4'>
            <h5 className='text-light quote'>“{v.quote}”</h5>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <p className='text-light'>- {v.by}</p>
              </div>
              <div className='d-flex'>
                <button className='btn prev-btn'>
                  <i className='fas fa-chevron-left text-light'></i>
                </button>
                <button className='btn next-btn'>
                  <i className='fas fa-chevron-right text-light'></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swp>
  );
};

export default AuthBannerContent;
