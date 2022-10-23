function getCookieJSON(
  cookie: string | undefined
): Record<string, string> | undefined {
  if (!cookie) return {};
  // 使用正则表达式获取 cookie 键值对，并转换为对象
  return cookie.match(/([^;=]+)(?:=([^;]*))?/g)?.reduce((pre, cur) => {
    const [key, value] = cur.trim().split('=');
    pre[key] = value;
    return pre;
  }, {});
}

function encodeCookieValue(val: string): string {
  return encodeURIComponent(val)
    .replace(/%7C/g, '|')
    .replace(/'/g, `\'`)
    .replace(/%2B/g, '+')
    .replace(/%25/g, '%')
    .replace(/\*/g, '%2A');
}

export function encodeCookie(cookie: string) {
  const cookieJson = getCookieJSON(cookie);
  if (!cookieJson) return 'cookie 存在错误！！！';
  Object.entries(cookieJson).forEach(
    ([key, val]) => (cookieJson[key] = encodeCookieValue(val))
  );
  return getCookieString(cookieJson);
}

function getCookieString(obj: object): string {
  const string = Object.keys(obj).reduce((pre, cur) => {
    return pre + `${cur}=${obj[cur]}; `;
  }, '');
  return string.substring(0, string.length - 2 || 0);
}

export function isBiliCookie(cookie: string) {
  return Boolean(
    cookie &&
      cookie.length > 90 &&
      ['bili_jct', 'SESSDATA', 'DedeUserID'].every((str) =>
        cookie.includes(str)
      )
  );
}
