import SectionTitle from 'components/common/SectionTitle';
import IndexCourseItem from 'components/index/IndexCourseItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

const IndexCourses = () => {
  return (
    <div className='section index-courses'>
      <div className='container'>
        <SectionTitle
          title='Featured Courses'
          lead='Find the best courses for your future profession from the world largest library'
        />
        <Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={30}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
            <SwiperSlide key={v}>
              <IndexCourseItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IndexCourses;
