import CourseItem from 'components/shared/CourseItem';

const CoursesContent = () => {
  const images = [
    'https://img-c.udemycdn.com/course/480x270/4427730_5388.jpg',
    'https://img-c.udemycdn.com/course/480x270/3604434_7884_3.jpg',
    'https://img-c.udemycdn.com/course/480x270/2121018_9de5_5.jpg',
    'https://img-c.udemycdn.com/course/480x270/1565838_e54e_14.jpg',
    'https://img-c.udemycdn.com/course/480x270/629302_8a2d_2.jpg',
    'https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg',
  ];
  return (
    <div className='courses-content'>
      <div className='row d-flex justify-content-between align-items-center mt-5'>
        {images.map((img) => (
          <div className='col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center align-items-center courses-single'>
            <CourseItem img={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesContent;
