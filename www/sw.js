self.addEventListener('install', ev => {
  // self.skipWaiting();
  console.log('installed');
});

self.addEventListener('activate', ev => {
  console.log('activated');
  // clients.claim().then(() => {
  //   console.log('the service worker has now claimed all pages');
  // });
});

self.addEventListener('fetch', ev => {
  console.log(`fetch request for ${ev.request.url} from ${ev.clientId}`);
});

self.addEventListener('message', ev => {
  console.log('message');
});
