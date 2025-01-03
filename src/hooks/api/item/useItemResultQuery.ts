import { getItemKeyword } from '@/api/item';
import { useQuery } from '@tanstack/react-query';

export const useItemResultQuery = (keyword: string) => {
  const { data } = useQuery({
    queryKey: ['items', keyword],
    queryFn: () => getItemKeyword(keyword),
  });

  return { items: data?.items || [] };
};
