import { ImagePreviewBox } from '@/components/atoms/ImagePreviewBox';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { StringTag } from '@/components/atoms/StringTag';
import { ItemOverviewCardProps } from '@/types/Item';

export const ItemOverviewCard = ({
  id = '',
  title,
  date,
  tags,
  image,
  status,
  role = 'user',
  onClick,
}: ItemOverviewCardProps) => {
  const handleUserClick = () => {
    if (role === 'user' && typeof onClick === 'function') {
      (onClick as () => void)();
    }
  };

  const handleAdminClick = () => {
    if (role === 'admin' && typeof onClick === 'function') {
      (onClick as (itemId: string, status: boolean) => void)(id, status);
    }
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 ${
        role === 'user' ? 'cursor-pointer hover:shadow-md' : ''
      }`}
      onClick={role === 'user' ? handleUserClick : undefined}
    >
      <ImagePreviewBox size="sm" image={image} />
      <div className="flex-1">
        <div className="flex flex-row justify-between">
          <h2 className="font-semibold">{title}</h2>
          <StatusBadge
            status={status}
            onClick={role === 'admin' ? handleAdminClick : undefined}
            className={`${role === 'admin' ? 'cursor-pointer hover:shadow-md' : ''}`}
          />
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
