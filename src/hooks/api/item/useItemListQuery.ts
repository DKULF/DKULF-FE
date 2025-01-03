import { useQuery } from '@tanstack/react-query';
import { getItemList } from '@/api/item';

export const useItemListQuery = () => {
  const { data } = useQuery({
    queryKey: ['items'],
    queryFn: getItemList,
  });

  return { items: data?.items || [] };
};
