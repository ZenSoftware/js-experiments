/**
 * https://leetcode.com/problems/simplify-path/?envType=featured-list&envId=top-microsoft-questions%3FenvType%3Dfeatured-list&envId=top-microsoft-questions
 * Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.
 * In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.
 * The canonical path should have the following format:
 * The path starts with a single slash '/'.
 * Any two directories are separated by a single slash '/'.
 * The path does not end with a trailing '/'.
 * The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
 * Return the simplified canonical path.
 * 1 <= path.length <= 3000
 * path consists of English letters, digits, period '.', slash '/' or '_'.
 * path is a valid absolute Unix path.
 */
export function simplifyPath(path: string): string {
  path = path.trim();

  while (path.includes('//')) {
    path = path.replace('//', '/');
  }

  if (path.charAt(path.length - 1) === '/') path = path.substring(0, path.length - 1);
  const splitPath = path.split('/');

  let i = 0;
  while (i < splitPath.length) {
    if (splitPath[i] === '.') {
      splitPath.splice(i, 1);
      continue;
    } else if (splitPath[i] === '..') {
      if (i >= 1) {
        splitPath.splice(i - 1, 2);
        i--;
      } else {
        splitPath.splice(i, 1);
      }
      continue;
    }
    i++;
  }

  path = splitPath.join('/');
  if (path.charAt(path.length - 1) === '/') path = path.substring(0, path.length - 1);
  if (path.charAt(0) !== '/') path = '/' + path;
  return path;
}
