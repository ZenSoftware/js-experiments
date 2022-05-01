/**
 * TypeScript Utility keyof nested object: [blog post](https://dev.to/pffigueiredo/typescript-utility-nested-keyof-object-2pa3)
 */
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? // @ts-ignore
      `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export function getFromPath<T extends object>(object: T, path: NestedKeyOf<T>) {
  let result: { [key: string]: any } = object;

  for (const key of path.split('.')) {
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
