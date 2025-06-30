# TaskBazaar

TaskBazaar is a simple marketplace for connecting customers with service vendors. The backend is built with Express and stores data in JSON files, while the frontend is a set of static HTML pages served by the same server.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install the dependencies from the project root:

```bash
npm install
```

This installs the packages required for both the backend and frontend.

## Starting the Backend Server

Run the Express server from the project root:

```bash
node backend/server.js
```

You can also start it from the `backend` directory using `npm start`.
The server will listen on `http://localhost:4000`.

## Serving the Frontend

The frontend files are served automatically by the backend. Once the server is running, open your browser to:

```
http://localhost:4000
```

to use the TaskBazaar web interface.
