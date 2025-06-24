type TextHighlightProps = {
  children: React.ReactNode;
  color?: string;
  size?: string;
  face?: string;
};

const TH = (props: TextHighlightProps) => {
  const { children, color = '', size = '', face = '' } = props;
  return <span className={` ${color} ${size} ${face} `}>{children}</span>;
};

export default TH;
