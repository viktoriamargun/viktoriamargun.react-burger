export function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...(options.expires ? { expires: new Date(Date.now() + options.expires) } : {}),
    ...options,
  };
  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  
  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}

export function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${encodeURIComponent(name)}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
