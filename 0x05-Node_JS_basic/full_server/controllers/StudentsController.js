import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const KNOWN_MAJOR = ['CS', 'SWE'];

/**
 * The student-related route handlers.
 * @author Odionye Obiajulu Williams <https://github.com/willy4opera>
 */
class StudentsController {
  static getAllStudents(request, response) {
    const dataRoute = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataRoute)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // This function compares string and orders them alppabetically.
        // The ordering are also case sensitive.
        const compfn = (numx, numy) => {
          if (numx[0].toLowerCase() < numy[0].toLowerCase()) {
            return -1;
          }
          if (numx[0].toLowerCase() > numy[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(compfn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dataRoute = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!KNOWN_MAJOR.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataRoute)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
