interface Props {
  title: string;
  lead: string;
}

const SectionTitle = (props: Props) => {
  return (
    <div className='text-center pb-5 section-title'>
      <h1 className='display-3'>{props.title}</h1>
      <p className='lead'>{props.lead}</p>
    </div>
  );
};

export default SectionTitle;
