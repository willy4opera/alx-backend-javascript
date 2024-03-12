/**
 * Strip and join strings with dash
 * @param {Set<String>} set - Collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author ODIONYE OBIAJULU WILLIAMS <https://github.com/willy4opera>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
