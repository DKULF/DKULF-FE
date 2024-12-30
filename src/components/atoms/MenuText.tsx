interface MenuTextProps {
  text: string;
  className?: string;
}

export const MenuText = ({ text, className = '' }: MenuTextProps) => {
  return <span className={className}>{text}</span>;
};
