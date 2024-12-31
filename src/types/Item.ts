export type ItemImage = {
  data: string;
  ext: string;
  contentType: string;
};

export interface ItemOverviewCardProps {
  title: string;
  date: string;
  tags: string[];
  image: ItemImage;
  status: boolean;
}
