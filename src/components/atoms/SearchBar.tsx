import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="search"
        placeholder="습득물 또는 키워드를 검색해보세요."
        className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none placeholder:text-sm"
      />{' '}
    </div>
  );
};
