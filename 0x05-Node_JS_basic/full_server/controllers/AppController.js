/**
 * We build the miscellaneous route handlers.
 * @author Odionye Obiajulu Williams <https://github.com/willy4opera>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
