import SectionTitle from 'components/common/SectionTitle';
import CourseItem from 'components/shared/CourseItem';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

const IndexCourses = () => {
  const courses = useSelector((state: RootState) => state.courses.courses);

  return (
    <div className='section index-courses'>
      <div className='container'>
        <SectionTitle
          title='Featured Courses'
          lead='Find the best courses for your future profession from the world largest library'
        />
        <Swiper slidesPerView={'auto'} spaceBetween={30}>
          {courses.map((c) => (
            <SwiperSlide key={c.id}>
              <CourseItem course={c} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IndexCourses;
