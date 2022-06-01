const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sleep = ms => new Promise(r => setTimeout(r, ms));

// serialResolve(ids);
// serialResolveReduce(ids);
concurrentResolve(ids);

async function fetchInfo(id: number) {
  await sleep(100);
  return id;
}

async function serialResolve(ids: number[]) {
  console.time('bench');
  for (let id of ids) {
    const result = await fetchInfo(id);
    console.log(result);
  }
  console.timeEnd('bench');
}

async function serialResolveReduce(ids: number[]) {
  console.time('bench');
  await ids.reduce(async (acc, id) => {
    await acc;
    const result = await fetchInfo(id);
    console.log(result);
  }, Promise.resolve());
  console.timeEnd('bench');
}

async function concurrentResolve(ids: number[]) {
  console.time('bench');
  const result = await Promise.all(ids.map(id => fetchInfo(id)));
  console.log(result);
  console.timeEnd('bench');
}
