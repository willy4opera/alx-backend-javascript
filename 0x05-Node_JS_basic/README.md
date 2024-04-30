# PROJECT AUTHOR : ODIONYE OBIAJULU WILLIAMS
# PROJECT TITLE : NodeJS Basics

The content of this project are task for learning the basics of NodeJS.

## Tasks Completed Are:


    Executing Basic JavaScript with Node.js
        A module in 0-console.js exports a function called displayMessage. This function prints a string argument to STDOUT.

    Using Process stdin
        1-stdin.js is a script to be executed via the command line with the following steps:
            Display Welcome to Holberton School, what is your name?.
            Allow the user to input their name.
            Display Your name is: INPUT.
            Upon exiting, display This important software is now closing.

    Reading a File Synchronously with Node.js
        2-read_file.js exports a function named countStudents with the following features:
            It accepts a file path as an argument.
            Attempts to read the database file synchronously.
            If the file is unavailable, it throws an error: Cannot load the database.
            If accessible, it logs the number of students and their names by field to the console.

    Reading a File Asynchronously with Node.js
        3-read_file_async.js exports a function named countStudents with similar features to the synchronous version, but operates asynchronously and returns a Promise.

    Create a Small HTTP Server Using Node's HTTP Module
        4-http.js creates and exports a small HTTP server using Node's http module, listening on port 1245, and displaying Hello Holberton School! for any endpoint.

    Create a More Complex HTTP Server Using Node's HTTP Module
        5-http.js creates and exports a more complex HTTP server, still using Node's http module, listening on port 1245, and responding differently based on the URL path:
            /: Displays Hello Holberton School!.
            /students: Displays a list of students obtained from 3-read_file_async.js.

    Create a Small HTTP Server Using Express
        6-http_express.js creates and exports a small HTTP server using Express, listening on port 1245, and displaying Hello Holberton School! for the / endpoint.

    Create a More Complex HTTP Server Using Express
        7-http_express.js creates and exports a more complex HTTP server using Express, listening on port 1245, and responding differently based on the URL path:
            /: Displays Hello Holberton School!.
            /students: Displays a list of students obtained from 3-read_file_async.js.

    Organize a Complex HTTP Server Using Express
        Create a directory named full_server with the following structure:
            controllers
            routes
        Inside full_server, create utils.js, AppController.js, and StudentsController.js with specified functionalities.
        Write routes in index.js linking to the controllers.
        Create server.js to set up an Express server using the defined routes and port.
        Update package.json accordingly for running with babel-node.
        Export the Express app from server.js.
        Ensure flexibility in handling the database filename.
