// uat/index.js
const WHITE_LISTED_PATHNAMES = ['', '/', '/index.html'];

export async function redirect() {
  let pathname = window.location.pathname;

  if (WHITE_LISTED_PATHNAMES.includes(pathname)) {
    return;
  }

  pathname = pathname.replace('/index.html', '');

  const pathnames = pathname.split('/').filter((val) => val !== '');
  let loopCount = pathnames.length - 1;

  for (let k = loopCount; k > 0; k--) {
    let updatedPathname = `/${pathnames.slice(0, k).join('/')}`;
    let updatedUrl = window.location.origin + updatedPathname;
    const res = await fetch(updatedUrl);
    if (res.ok) {
      window.location.replace(updatedUrl + '/index.html' + `?redirect_uri=${pathname.replace(updatedPathname, '')}`);
      return;
    }
  }

  window.location.replace(window.location.origin + '/index.html');
}

redirect();
