import cookies from 'js-cookie';

export const getUserCookie = () => {
  const cookie = cookies.get('auth');
  if (!cookie) {
    return;
  }
  console.log(":::", cookie)
  let cookieD = {
    token: "asdasdasd"
  }
  let jsop = JSON.stringify(cookieD)
  return JSON.parse(jsop);
}

export const setUserCookie = (user) => {
  cookies.set('auth', user, {
    expires: 1 / 24
  });
};

export const removeUserCookie = () => cookies.remove('auth');