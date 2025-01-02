interface TagListProps {
  tags: string[];
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-blue-50 text-blue-600 font-semibold rounded-full text-xs"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};
