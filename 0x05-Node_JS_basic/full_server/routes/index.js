import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Associate the routes to the appropriate handler in the
 * main Express application.
 * @param {Express} app The Express application.
 * @author Odionye Obiajulu Williams <https://github.com/willy4opera>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
