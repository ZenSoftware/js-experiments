const request = window.indexedDB.open('zen', 1);

request.onerror = event => {
  console.error('An error occured with indexedDB', event);
};

request.onupgradeneeded = () => {
  const db = request.result;
  const store = db.createObjectStore('cars', { keyPath: 'id' });
  store.createIndex('cars_color', ['color'], { unique: false });
  store.createIndex('color_make', ['color', 'make'], { unique: false });
};

request.onsuccess = () => {
  const db = request.result;
  const transaction = db.transaction('cars', 'readwrite');
  const store = transaction.objectStore('cars');
  const colorIndex = store.index('cars_color');
  const colorMakeIndex = store.index('color_make');

  store.put({ id: 1, color: 'Red', make: 'Toyota' });
  store.put({ id: 2, color: 'Yellow', make: 'Subaru' });
  store.put({ id: 3, color: 'Blue', make: 'Lexus' });
  store.put({ id: 4, color: 'Blue', make: 'Honda' });
  store.put({ id: 5, color: 'Red', make: 'Acura' });

  const idQuery = store.get(4);
  const colorQuery = colorIndex.getAll(['Red']);
  const colorMakeQuery = colorMakeIndex.getAll(['Blue', 'Lexus']);

  idQuery.onsuccess = () => {
    console.log('idQuery', idQuery.result);
  };

  colorQuery.onsuccess = () => {
    console.log('colorQuery', colorQuery.result);
  };

  colorMakeQuery.onsuccess = () => {
    console.log('colorMakeQuery', colorMakeQuery.result);
  };

  transaction.oncomplete = () => {
    db.close();
  };
};
