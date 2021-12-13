interface Props {
  heading?: string;
  title?: string;
}

const CourseInstructor = (props: Props) => {
  return (
    <div className='d-flex course-instructor'>
      <img
        alt={props.title}
        className='avatar'
        src='https://cdn.pixabay.com/photo/2015/08/25/10/40/ben-knapen-906550_960_720.jpg'
      />
      <div>
        <p className='text-capitalize text-secondary instructor-heading detail-title'>{props.heading}</p>
        <p className='text-uppercase instructor-title'>{props.title}</p>
      </div>
    </div>
  );
};

export default CourseInstructor;
