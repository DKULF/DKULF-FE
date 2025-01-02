import { getItem } from '@/api/item';
import { useQuery } from '@tanstack/react-query';

export const useFetchItemDetail = (itemId: string) => {
  const { data: itemDetail } = useQuery({
    queryKey: ['itemDetail', itemId],
    queryFn: () => getItem(itemId),
  });
  return { itemDetail };
};
