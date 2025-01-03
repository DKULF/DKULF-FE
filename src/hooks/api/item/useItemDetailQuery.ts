import { getItem } from '@/api/item';
import { useQuery } from '@tanstack/react-query';

export const useItemDetailQuery = (itemId: string) => {
  const { data } = useQuery({
    queryKey: ['itemDetail', itemId],
    queryFn: () => getItem(itemId),
  });
  return { item: data?.item };
};
