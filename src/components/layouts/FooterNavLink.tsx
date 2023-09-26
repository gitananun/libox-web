interface Props {
  children: any;
  href?: string;
}

const FooterNavLink = (props: Props) => {
  return (
    <a className='footer-nav-link' href={props.href}>
      {props.children}
    </a>
  );
};

export default FooterNavLink;
