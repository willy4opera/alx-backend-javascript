/**
 * Checks a set for an array element.
 * @param {Set} set - Collection of unique items.
 * @param {*} array - The array of items.
 * @author ODIONYE OBIAJULU W <https://github.com/willy4opera>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
