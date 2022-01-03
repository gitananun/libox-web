import CourseItem from 'components/shared/CourseItem';
import { CourseModel } from 'data/models/CourseModel';

interface Props {
  courses: CourseModel[];
}

const CoursesContent = (props: Props) => {
  return (
    <div className='courses-content'>
      <div className='row d-flex justify-content-between align-items-center mt-4'>
        {props.courses.map((c) => (
          <div
            key={c.id}
            className='col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center align-items-center courses-single'
          >
            <CourseItem course={c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesContent;
