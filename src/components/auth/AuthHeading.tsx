interface Props {
  title: string;
  subtitle: string;
}

const AuthHeading = (props: Props) => {
  return (
    <div className='text-start w-100 mb-3'>
      <h2>{props.title}</h2>
      <h6 className='text-secondary'>{props.subtitle}</h6>
    </div>
  );
};

export default AuthHeading;
