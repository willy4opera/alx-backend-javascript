import fs from 'fs';

/**
 * Fetches students data in a CSV data file.
 * @param {String} dataRoute The path to the CSV data file.
 * @author Odionye Obiajulu Williams
 *  <https://github.com/willy4opera>
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
const readDatabase = (dataRoute) => new Promise((resolve, reject) => {
  if (!dataRoute) {
    reject(new Error('Cannot load the database'));
  }
  if (dataRoute) {
    fs.readFile(dataRoute, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const stdntGroups = {};
        const databaseFn = fileLines[0].split(',');
        const stdntPropertyNm = databaseFn
          .slice(0, databaseFn.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(stdntGroups).includes(field)) {
            stdntGroups[field] = [];
          }
          const studentEntries = stdntPropertyNm
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          stdntGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(stdntGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
