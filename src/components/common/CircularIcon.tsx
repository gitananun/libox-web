interface Props {
  iconClassName: string;
}

const CircularIcon = (props: Props) => {
  return (
    <span className='icon-circle'>
      <i className={props.iconClassName}></i>
    </span>
  );
};

export default CircularIcon;
