import { SearchBar } from '@/components/atoms/SearchBar';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { Header } from '@/components/organisms/Header';
import { Sidebar } from '@/components/organisms/Sidebar';
import { items } from '@/constants/dummyData';
import { menuItems } from '@/constants/menuItems';
import { UserProfile } from '@/constants/userProfile';
import React, { useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <Sidebar
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
          userProfile={UserProfile}
          isLogin={accessToken ? true : false}
        />
      )}
      <div className="p-4 mt-14">
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
    </div>
  );
};
export default LandingPage;
