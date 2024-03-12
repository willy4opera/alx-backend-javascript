/**
 * Fetches ids from students list.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author ODIONYE OBIAJULU W <https://github.com/willy4opera>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
