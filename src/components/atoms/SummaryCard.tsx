import { Item } from '@/types/Item';
import React from 'react';

interface SummaryCardProps {
  totalItems: Item[];
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ totalItems }) => {
  return (
    <div className="p-4 w-full bg-white shadow-sm mx-4 mt-4 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">전체 습득물</p>
          <p className="text-xl font-bold mt-1">{totalItems.length}개</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">보관중</p>
          <p className="text-xl font-bold mt-1">
            {totalItems.filter((item) => item.status).length}개
          </p>
        </div>
      </div>
    </div>
  );
};
