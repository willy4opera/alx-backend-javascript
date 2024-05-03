const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the total number of students in a CSV data file.
 * @param {String} dataRoute The path to the CSV data file.
 * @author Odionye Obiajulu Williams <https://github.com/willy4opera>
 */
const countStudents = (dataRoute) => new Promise((resolve, reject) => {
  if (!dataRoute) {
    reject(new Error('Cannot load the database'));
  }
  if (dataRoute) {
    fs.readFile(dataRoute, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportsection = [];
        const fileln = data.toString('utf-8').trim().split('\n');
        const studntgroup = {};
        const databasefn = fileln[0].split(',');
        const studntPropertynm = databasefn.slice(
          0,
          databasefn.length - 1,
        );

        for (const line of fileln.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studntgroup).includes(field)) {
            studntgroup[field] = [];
          }
          const studentEntries = studntPropertynm.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studntgroup[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studntgroup).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportsection.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studntgroup)) {
          reportsection.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportsection.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;