interface Props {
  href: string;
  iconClassName: string;
}

const FooterSocialItem = (props: Props) => {
  return (
    <a className='text-secondary social-icon mx-2' href={props.href}>
      <i className={props.iconClassName}></i>
    </a>
  );
};

export default FooterSocialItem;
