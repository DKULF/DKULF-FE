import { ImagePreviewBox } from '@/components/atoms/ImagePreviewBox';
import { StringTag } from '@/components/atoms/StringTag';
import { ItemOverviewCardProps } from '@/types/Item';

export const ItemOverviewCard = ({ itemInfo }: ItemOverviewCardProps) => {
  const tagArray = itemInfo.tags;
  const imageSrc = `data:${itemInfo.image.contentType};base64,${itemInfo.image.data}`;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
      <ImagePreviewBox size="sm" src={imageSrc} />
      <div className="flex-1">
        <h3 className="font-semibold">{itemInfo.title}</h3>
        <p className="text-sm text-gray-400">{itemInfo.date}</p>
        <div className="flex flex-row gap-1">
          {tagArray.map((tag, index) => (
            <StringTag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
