function getCookieArray(cookie: string | undefined) {
  if (!cookie) return [];
  return cookie.split('; ').map((el) => el.split('='));
}

function cookie2Obj(cookie: string): object {
  const arr = getCookieArray(cookie).filter((el) => el.length === 2);
  const obj = {};
  for (const it of arr) {
    if (obj[it[0]]) {
      obj[it[0]] = it[1];
    } else {
      Object.defineProperty(obj, it[0], {
        value: it[1],
        enumerable: true,
        writable: true,
      });
    }
  }
  Object.keys(obj).forEach((key) => {
    obj[key] = encodeCookieValue(obj[key]);
  });
  return obj;
}

function encodeCookieValue(val: string): string {
  return encodeURIComponent(val)
    .replace(/%7C/g, '|')
    .replace(/%2B/g, '+')
    .replace(/%25/g, '%')
    .replace(/\*/g, '%2A');
}

export function encodeCookie(cookie: string) {
  return getCookieString(cookie2Obj(cookie));
}

function getCookieString(obj: object): string {
  const string = Object.keys(obj).reduce((pre, cur) => {
    return pre + `${cur}=${obj[cur]}; `;
  }, '');
  return string.substring(0, string.length - 2 || 0);
}
