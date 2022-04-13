export function get<T>(object: T, path: string) {
  const keys = path.split('.');

  let result: { [key: string]: any } = object;
  for (const key of keys) {
    result = result[key];
  }

  return result;
}
