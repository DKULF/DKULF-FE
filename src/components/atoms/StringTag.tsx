interface StringTagProps {
  tag?: string;
}

export const StringTag = ({ tag = '' }: StringTagProps) => {
  return <span className="text-blue-600 text-sm font-semibold">#{tag}</span>;
};
