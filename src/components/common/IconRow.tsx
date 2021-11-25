interface Props {
  iconClassName: string;
  children?: any;
}

const IconRow = (props: Props) => {
  return (
    <div className='d-flex align-items-center'>
      <i className={`${props.iconClassName} text-secondary`}></i>
      <span className='px-2 icon-row-text'>{props.children}</span>
    </div>
  );
};

export default IconRow;
