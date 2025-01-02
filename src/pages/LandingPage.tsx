import { SearchBar } from '@/components/atoms/SearchBar';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { Sidebar } from '@/components/organisms/Sidebar';
import { menuItems } from '@/constants/menuItems';
import { userProfile } from '@/constants/userProfile';
import { useMenu } from '@/contexts/MenuContext';
import { useFetchItemList } from '@/hooks/api/item/useFetchItemList';
import { Item } from '@/types/Item';

const LandingPage = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const accessToken = localStorage.getItem('accessToken');
  const { items } = useFetchItemList();

  return (
    <div className="relative">
      {isMenuOpen && (
        <Sidebar
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
          userProfile={userProfile}
          isLogin={!!accessToken}
        />
      )}
      <SearchBar />
      <div className="gap-4 space-y-4 mt-6">
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
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LandingPage;
