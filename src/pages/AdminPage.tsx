import { SummaryCard } from '@/components/atoms/SummaryCard';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { useItemListQuery } from '@/hooks/api/item/useItemListQuery';
import { Item } from '@/types/Item';

const AdminPage = () => {
  const { items: items } = useItemListQuery();
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
              title={item.name}
              date={item.createdAt}
              tags={item.tags}
              image={item.image}
              status={item.status}
              role="admin"
            />
          ))
        )}
      </div>
    </div>
  );
};
export default AdminPage;
