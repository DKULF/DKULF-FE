const accessToken = localStorage.getItem('accessToken');
export const userProfile = accessToken
  ? {
      name: '홍길동',
      email: '1231241@dankook.ac.kr',
    }
  : {
      name: '로그인해주세요',
      email: '클릭하시면 로그인 페이지로 이동합니다.',
    };
