export type ItemImage = {
  data: string;
  ext: string;
  contentType: string;
};

export type ItemInfo = {
  title: string;
  date: string;
  tags: string[];
  image: ItemImage;
  status: boolean;
};

export interface ItemOverviewCardProps {
  itemInfo: ItemInfo;
}
