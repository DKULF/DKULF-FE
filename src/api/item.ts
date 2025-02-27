import itemApiInstance from '@/api/itemApiInstance';
import { END_POINT } from '@/constants/api';
import { ItemForm } from '@/types/Item';

export const getItemList = async () => {
  const { data } = await itemApiInstance.get(`${END_POINT.ITEM_LIST}`);
  return data;
};

export const getItem = async (itemId: string) => {
  const { data } = await itemApiInstance.get(END_POINT.ITEM(itemId));
  return data;
};

export const getItemKeyword = async (keyword: string) => {
  const { data } = await itemApiInstance.get(END_POINT.ITEM_KEYWORD(keyword));
  return data;
};

export const postItem = async (
  form: Pick<ItemForm, 'name' | 'tags' | 'image'>,
) => {
  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('tags', form.tags);
  formData.append('image', form.image);
  const { data } = await itemApiInstance.post(
    END_POINT.REGISTER_ITEM,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
};

export const patchItemStatus = async ({
  itemId,
  status,
}: {
  itemId: string;
  status: boolean;
}) => {
  console.log(itemId);
  console.log(status);
  const { data } = await itemApiInstance.patch(
    `${END_POINT.ADMIN_UPDATE(itemId)}`,
    { status: !status },
  );
  return data;
};

export const deleteItem = async (itemId: string) => {
  const { data } = await itemApiInstance.patch(
    `${END_POINT.ADMIN_DELETE}/${itemId}`,
  );
  return data;
};

export const deleteItems = async () => {
  const { data } = await itemApiInstance.patch(`${END_POINT.ADMIN_DELETE_ALL}`);
  return data;
};
