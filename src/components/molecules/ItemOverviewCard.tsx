import { ImagePreviewBox } from '@/components/atoms/ImagePreviewBox';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { StringTag } from '@/components/atoms/StringTag';
import { ItemOverviewCardProps } from '@/types/Item';

export const ItemOverviewCard = ({
  title,
  date,
  tags,
  image,
  status,
}: ItemOverviewCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 cursor-pointer hover:shadow-md">
      <ImagePreviewBox size="sm" image={image} />
      <div className="flex-1">
        <div className="flex flex-row justify-between">
          <h2 className="font-semibold">{title}</h2>
          <StatusBadge status={status} />
        </div>
        <p className="text-sm text-gray-400">{date}</p>
        <div className="flex flex-row gap-1 mt-3">
          {tags.map((tag, index) => (
            <StringTag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
