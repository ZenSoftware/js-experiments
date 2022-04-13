export function get<T>(object: T, path: string) {
  const keys = path.split('.');

  let result: { [key: string]: any } = object;
  for (const key of keys) {
    result = result[key];
  }

  return result;
}

export function getObjectKeys(obj: any, previousPath = '', objectKeys: string[] = []) {
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = previousPath ? `${previousPath}.${key}` : key;

    if (typeof value !== 'object') {
      objectKeys.push(currentPath);
    } else {
      objectKeys.push(currentPath);
      getObjectKeys(value, currentPath, objectKeys);
    }
  }

  return objectKeys;
}
