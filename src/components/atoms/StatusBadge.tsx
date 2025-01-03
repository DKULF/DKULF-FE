interface StatusBadgeProps {
  status: boolean;
  onClick?: () => void;
}

export const StatusBadge = ({ status, onClick }: StatusBadgeProps) => {
  return (
    <div
      onClick={onClick}
      className={`${status ? 'bg-green-50 text-green-600' : 'bg-[#dfdfdf] text-[#666666]'} text-xs font-semibold px-2 py-[5px] rounded-[30px] inline-flex items-center`}
    >
      <span>{status === true ? '보관중' : '수령완료'}</span>
    </div>
  );
};
