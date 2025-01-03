import { SummaryCard } from '@/components/atoms/SummaryCard';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { useItemListQuery } from '@/hooks/api/item/useItemListQuery';
import { useUpdateItemStatusMutation } from '@/hooks/api/item/useUpdateItemStatusMutation';
import { Item } from '@/types/Item';

const AdminPage = () => {
  const { items } = useItemListQuery();
  const { mutate: patchItemStatus } = useUpdateItemStatusMutation();

  const updateStatus = (itemId: string, status: boolean) => {
    patchItemStatus({ itemId, status });
  };

  return (
    <div className="flex items-center flex-col">
      <SummaryCard totalItems={items} />
      <div className="gap-4 space-y-4 mt-6 w-full">
        {items.length === 0 ? (
          <div className="text-center text-gray-500 text-sm mt-60">
            등록된 분실물이 없습니다.
          </div>
        ) : (
          items.map((item: Item) => (
            <ItemOverviewCard
              key={item._id}
              id={item._id}
              title={item.name}
              date={item.createdAt}
              tags={item.tags}
              image={item.image}
              status={item.status}
              onClick={(itemId, status) => updateStatus(itemId, status)}
              role="admin"
            />
          ))
        )}
      </div>
    </div>
  );
};
export default AdminPage;
