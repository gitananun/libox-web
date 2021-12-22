import SectionTitle from 'components/common/SectionTitle';
import CourseItem from 'components/shared/CourseItem';
import { CourseModel } from 'data/models/CourseModel';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

interface Props {
  courses: CourseModel[];
}

const IndexCourses = (props: Props) => {
  return (
    <div className='section index-courses'>
      <div className='container'>
        <SectionTitle
          title='Featured Courses'
          lead='Find the best courses for your future profession from the world largest library'
        />
        <Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={30}>
          {props.courses.map((c) => (
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
