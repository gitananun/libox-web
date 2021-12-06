interface Props {
  children?: any;
  className?: string;
}

const Section = (props: Props) => {
  return <div className={`layout-section ${props.className ?? ''}`}>{props.children}</div>;
};

export default Section;
