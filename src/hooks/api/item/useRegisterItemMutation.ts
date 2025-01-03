import { postItem } from '@/api/item';
import { ItemForm } from '@/types/Item';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useRegisterItemMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ItemForm) => postItem(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['items', 'list'] });
      alert('등록되었습니다!');
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
      alert('등록에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
