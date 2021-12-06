const AuthLayout = (props: any) => {
  return (
    <div className='auth-layout'>
      <div className='row no-gutters'>{props.children}</div>
    </div>
  );
};

export default AuthLayout;
