import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

const AuthBackButton = (props: Props) => {
  return (
    <div className='w-100'>
      <Link to={props.to}>
        <button className='btn btn-outline-secondary btn-back mb-4'>
          <i className='fa fa-chevron-left'></i>
        </button>
      </Link>
    </div>
  );
};

export default AuthBackButton;
