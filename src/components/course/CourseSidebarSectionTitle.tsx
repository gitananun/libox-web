interface Props {
  textColor?: 'text-dark' | 'text-light';
  title: string;
}

const CourseSidebarSectionTitle = (props: Props) => {
  return (
    <div className='row d-flex align-items-center justify-content-center'>
      <div className={`col-4 title-prefix mx-2 ${props.textColor}`}></div>
      <div className='col'>
        <p className='title'>{props.title}</p>
      </div>
    </div>
  );
};

export default CourseSidebarSectionTitle;
