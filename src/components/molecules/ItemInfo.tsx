import { StatusBadge } from '@/components/atoms/StatusBadge';
import { TagList } from '@/components/atoms/TagList';

interface ItemInfoProps {
  title: string;
  status: boolean;
  date: string;
  tags: string[];
}

export const ItemInfo = ({ title, status, date, tags }: ItemInfoProps) => {
  return (
    <div className="bg-gray-50 rounded-lg flex flex-col space-y-3">
      <div className="flex space-x-3 items-center">
        <h2 className="font-bold text-2xl text-black">{title}</h2>
        <StatusBadge status={status} />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-gray-500 text-base font-medium">습득일</p>
        <p className="text-sm font-semibold text-gray-700">{date}</p>
      </div>
      <TagList tags={tags} />
    </div>
  );
};
