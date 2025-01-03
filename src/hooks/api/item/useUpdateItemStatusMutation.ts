import { patchItemStatus } from '@/api/item';
import { useMutation } from '@tanstack/react-query';

export const useUpdateItemStatusMutation = () => {
  return useMutation({
    mutationFn: patchItemStatus,
    onSuccess: () => {
      console.log('분실물의 상태가 변경되었습니다.');
      alert('분실물의 상태가 변경되었습니다.');
      window.location.reload();
    },
    onError: (error) => {
      console.error('분실물 상태 변경에 오류가 발생하였습니다.', error);
    },
  });
};
