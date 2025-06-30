# Taskbazar

This repository contains the Taskbazar application. The backend server is located in `backend/server.js`.

## Environment Variables

The server can be configured using the following environment variables. When not provided, the listed defaults are used.

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4000` | Port on which the Express server listens. |
| `FRONTEND_DIR` | `../frontend` (relative to `backend`) | Directory from which static frontend files are served. |
| `UPLOADS_DIR` | `backend/uploads` | Directory for uploaded certification documents. |
| `VENDORS_FILE` | `backend/vendors.json` | JSON file storing vendor data. |
| `CUSTOMERS_FILE` | `backend/customers.json` | JSON file storing customer data. |
| `BOOKINGS_FILE` | `backend/bookings.json` | JSON file storing booking records. |

Set these variables in your environment or in a `.env` file before starting the server if you need custom locations or port numbers.
