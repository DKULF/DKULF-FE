import { useQuery } from '@tanstack/react-query';
import { getItemList } from '@/api/item';

export const useFetchItemList = () => {
  const { data: itemList } = useQuery({
    queryKey: ['itemList'],
    queryFn: getItemList,
  });
  return { itemList };
};
