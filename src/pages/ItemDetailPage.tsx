import { ContactCard } from '@/components/atoms/ContactCard';
import { ImagePreviewBox } from '@/components/atoms/ImagePreviewBox';
import { NoticeBoard } from '@/components/atoms/NoticeBoard';
import { ItemInfo } from '@/components/molecules/ItemInfo';
import { items } from '@/constants/dummyData';

const ItemDetailPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <ImagePreviewBox size="lg" />
        <NoticeBoard />
      </div>
      <ItemInfo
        title={items[0].name}
        status={items[0].status}
        date={items[0].createdAt}
        tags={items[0].tags}
      />
      <ContactCard />
    </div>
  );
};

export default ItemDetailPage;
