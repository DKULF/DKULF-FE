import { NOTICE } from '@/constants/message';
import { Info } from 'lucide-react';

export const NoticeBoard = () => {
  return (
    <div className="w-full bg-blue-50 text-blue-700 flex flex-col space-y-1 p-2 border border-blue-200">
      <div className="flex items-center space-x-1">
        <Info className="w-4 h-4 [stroke-width:1.5]" />
        <p className="text-[10px] font-medium">{NOTICE.FIRST}</p>
      </div>
      <p className="text-[10px] font-medium">{NOTICE.SECOND}</p>
    </div>
  );
};
