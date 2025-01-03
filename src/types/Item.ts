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
  onClick?: () => void;
}

export interface ItemForm {
  name: string;
  tags: string;
  image: File;
}

export type Item = {
  _id: string;
  name: string;
  tags: string[];
  status: boolean;
  createdAt: string;
  image: ItemImage;
};
