import { SearchBar } from '@/components/atoms/SearchBar';
import { ItemOverviewCard } from '@/components/molecules/ItemOverviewCard';
import { Header } from '@/components/organisms/Header';
import { Sidebar } from '@/components/organisms/Sidebar';
import { LogOut, SquarePen } from 'lucide-react';
import React, { useState } from 'react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const UserProfile = {
    name: '홍길동',
    email: '1231241@dankook.ac.kr',
  };

  const menuItems = [
    {
      id: 'create-post',
      icon: SquarePen,
      text: '습득물 등록하기',
      route: '/courses',
    },
    { id: 'logout', icon: LogOut, text: '로그아웃', route: '/courses' },
  ];

  const items = [
    {
      _id: '6771f251f763dedbd48654da',
      name: '우산',
      tags: ['우산', '공학관', '검정색'],
      status: true,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
    {
      _id: '6771f251f763dedbd48654da',
      name: '가방',
      tags: ['가방', 'ICT관', '백팩', '검정색'],
      status: true,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
    {
      _id: '6771f251f763dedbd48654da',
      name: '구찌 지갑',
      tags: ['지갑', '인문관', '검정색'],
      status: true,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
    {
      _id: '6771f251f763dedbd48654da',
      name: '파우치',
      tags: ['흰색', '공학관'],
      status: true,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
    {
      _id: '6771f251f763dedbd48654da',
      name: '컵라면',
      tags: ['진라면', '상경관', '안오면제가먹을게요'],
      status: false,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
    {
      _id: '6771f251f763dedbd48654da',
      name: '목도리',
      tags: ['줄무늬목도리', '2공학관'],
      status: false,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
    {
      _id: '6771f251f763dedbd48654da',
      name: '스노우메이커',
      tags: ['오리모양', '곰상앞', '노랑색'],
      status: false,
      createdAt: '2024.12.30',
      image: {
        data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/GOvteMAAAAASUVORK5CYII=',
        ext: '.png',
        contentType: 'image/png',
      },
      __v: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <Sidebar
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
          userProfile={UserProfile}
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
