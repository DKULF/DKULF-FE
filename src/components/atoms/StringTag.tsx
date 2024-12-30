interface StringTagProps {
  tag?: string;
}

export const StringTag = ({ tag = '' }: StringTagProps) => {
  return <span className="text-blue-600 text-xs font-semibold">#{tag}</span>;
};
