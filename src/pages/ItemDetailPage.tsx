import { ContactCard } from '@/components/atoms/ContactCard';
import { ImagePreviewBox } from '@/components/atoms/ImagePreviewBox';
import { NoticeBoard } from '@/components/atoms/NoticeBoard';
import { ItemInfo } from '@/components/molecules/ItemInfo';
import { useItemDetailQuery } from '@/hooks/api/item/useItemDetailQuery';
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { item } = useItemDetailQuery(id!);

  if (!item) {
    return (
      <div className="text-center text-gray-500 text-sm mt-60">로딩중..</div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <ImagePreviewBox size="lg" image={item.image} />
        <NoticeBoard />
      </div>
      <ItemInfo
        title={item.name}
        status={item.status}
        date={item.createdAt}
        tags={item.tags}
      />
      <ContactCard />
    </div>
  );
};

export default ItemDetailPage;
