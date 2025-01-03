const accessToken = localStorage.getItem('accessToken');
const nickname = localStorage.getItem('nickname');
const email = localStorage.getItem('email');

export const userProfile = accessToken
  ? {
      name: nickname as string,
      email: email as string,
    }
  : {
      name: '로그인해주세요',
      email: '클릭하시면 로그인 페이지로 이동합니다.',
    };
