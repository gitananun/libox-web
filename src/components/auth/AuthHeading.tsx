interface Props {
  title: string;
  subtitle: string;
}

const AuthHeading = (props: Props) => {
  return (
    <div className='text-start w-100'>
      <h2>{props.title}</h2>
      <h6 className='text-secondary'>{props.subtitle}</h6>
      <hr className='w-25' />
    </div>
  );
};

export default AuthHeading;
