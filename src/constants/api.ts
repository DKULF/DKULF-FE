export const END_POINT = {
  // auth API
  SIGN_UP: '/auth/join',
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  EMAIL_REQUEST: '/auth/send',
  EMAIL_VERIFY: '/auth/verify',
  EMAIL_RESET: '/auth/verifyReset',

  //user API
  USER: '/user/info',

  //item API
  ITEM_LIST: '/items',
  REGISTER_ITEM: '/item',
  ITEM: (id: string) => `/item/${id}`,
  ITEM_KEYWORD: (keyword: string) => `/items/${keyword}`,

  //admin API
  ADMIM_UPDATE: (id: number) => `/admin/item/${id}`,
  ADMIN_DELETE: (id: number) => `/admin/item/${id}`,
  ADMIN_DELETE_ALL: '/admin/items',
};
