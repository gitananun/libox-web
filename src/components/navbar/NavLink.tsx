interface Props {
  href?: string;
  children: any;
  active?: boolean;
}

const NavLink = (props: Props) => {
  return (
    <a className={`nav-link ${props.active ? 'nav-link-active' : ''}`} aria-current='page' href={props.href ?? '#'}>
      {props.children}
    </a>
  );
};

export default NavLink;
