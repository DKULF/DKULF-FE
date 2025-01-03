export type ItemImage = {
  data: string;
  ext: string;
  contentType: string;
};

export interface ItemOverviewCardProps {
  id?: string;
  title: string;
  date: string;
  tags: string[];
  image: ItemImage;
  status: boolean;
  role?: 'admin' | 'user';
  onClick?: (() => void) | ((itemId: string, status: boolean) => void);
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
