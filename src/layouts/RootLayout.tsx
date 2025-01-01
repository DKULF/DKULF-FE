import React from 'react';
import '../index.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-[430px] font-pretendard">
      {children}
    </div>
  );
};

export default RootLayout;
