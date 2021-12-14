import { Link } from 'react-router-dom';

interface Props {
  to?: string;
  children: any;
  active?: boolean;
}

const NavLink = (props: Props) => {
  return (
    <Link className={`nav-link ${props.active ? 'nav-link-active' : ''}`} aria-current='page' to={props.to ?? '#'}>
      {props.children}
    </Link>
  );
};

export default NavLink;
