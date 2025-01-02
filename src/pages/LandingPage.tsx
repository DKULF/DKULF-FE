import { SearchBar } from '@/components/atoms/SearchBar';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { Sidebar } from '@/components/organisms/Sidebar';
import { items } from '@/constants/dummyData';
import { menuItems } from '@/constants/menuItems';
import { userProfile } from '@/constants/userProfile';
import { useMenu } from '@/contexts/MenuContext';

const LandingPage = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const accessToken = localStorage.getItem('accessToken');

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
        {items.map((item) => (
          <ItemOverviewCard
            key={item._id}
            title={item.name}
            date={item.createdAt}
            tags={item.tags}
            image={item.image}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
