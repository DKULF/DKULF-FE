import { useState } from 'react';
import { SearchBar } from '@/components/atoms/SearchBar';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { Sidebar } from '@/components/organisms/Sidebar';
import { menuItems } from '@/constants/menuItems';
import { userProfile } from '@/constants/userProfile';
import { useMenu } from '@/contexts/MenuContext';
import { useItemListQuery } from '@/hooks/api/item/useItemListQuery';
import { useItemResultQuery } from '@/hooks/api/item/useItemResultQuery';
import { Item } from '@/types/Item';

const LandingPage = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const accessToken = localStorage.getItem('accessToken');

  const [keyword, setKeyword] = useState('');

  const { items: initialItems } = useItemListQuery();
  const { items: searchedItems } = useItemResultQuery(keyword);

  const displayedItems = keyword ? searchedItems : initialItems;

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
      <SearchBar onSearch={(value: string) => setKeyword(value)} />
      <div className="gap-4 space-y-4 mt-6">
        {displayedItems.length === 0 ? (
          <div className="text-center text-gray-500 text-sm mt-60">
            등록된 분실물이 없습니다.
          </div>
        ) : (
          displayedItems.map((item: Item) => (
            <ItemOverviewCard
              key={item._id}
              title={item.name}
              date={item.createdAt}
              tags={item.tags}
              image={item.image}
              status={item.status}
              onClick={() => {
                window.location.href = `/items/${item._id}`;
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LandingPage;
