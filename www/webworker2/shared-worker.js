let count = 0;

self.onconnect = ev => {
  const port = ev.ports[0];

  port.onmessage = messageEv => {
    count += 34;
  };

  const interval = setInterval(() => {
    count++;
    port.postMessage({ shared: count });
  }, 3400);
};
