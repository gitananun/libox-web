interface Props {
  iconClassName: string;
  title: string;
  value: string;
}

const CourseFeatureRow = (props: Props) => {
  return (
    <div className='row mb-3'>
      <div className='col-8'>
        <i className={`${props.iconClassName} icon`}></i>
        <span className='name'>{props.title}</span>
      </div>
      <div className='col-4 text-end'>
        <span className='info'>{props.value}</span>
      </div>
    </div>
  );
};

export default CourseFeatureRow;
