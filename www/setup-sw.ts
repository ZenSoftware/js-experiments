interface ZenWindow extends Window {
  ZEN_APP: {
    SW: ServiceWorker;
    cacheName: string;
  };
}

declare var window: ZenWindow;

if (!window.ZEN_APP) {
  window.ZEN_APP = {
    cacheName: 'zen',
  } as any;
}

(async function () {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.register('/sw.js');
    window.ZEN_APP.SW = (registration.installing ||
      registration.waiting ||
      registration.active) as any;
  }

  const cache = await caches.open(window.ZEN_APP.cacheName);

  const url = 'assets/Lily_and_Pups.jfif';

  let response = await cache.match(url);
  if (response) {
    console.log('found', response);
  } else {
    console.log('not found - fetching and caching');
    response = await fetch(url);
    if (!response.ok) throw response.statusText;
    cache.put(url, response.clone());
  }

  const lilyImg = document.querySelector('#lily-img') as HTMLImageElement;
  const imgUrl = URL.createObjectURL(await response.blob());
  lilyImg.src = imgUrl;
})();
