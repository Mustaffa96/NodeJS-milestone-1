# Node.js Milestone 1

Basic examples demonstrating Node.js fundamentals including file I/O, HTTP server, and debugging.

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Examples

### File I/O Example
```bash
npm run file-io
```
This will demonstrate reading, writing, and appending to files.

### HTTP Server
```bash
npm start
```
The server will start on http://localhost:3000 with these endpoints:
- GET / - Welcome message
- GET /api/time - Current time
- POST /api/echo - Echoes back JSON request body

### Testing POST /api/echo
You can test the echo endpoint using cURL:
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"message\":\"Hello Server!\"}" http://localhost:3000/api/echo
```

Or using Postman:
1. Create a new POST request to http://localhost:3000/api/echo
2. Set header: Content-Type: application/json
3. In the request body (raw JSON), enter:
```json
{
    "message": "Hello Server!",
    "data": {
        "name": "Test",
        "value": 123
    }
}
```

### Debugging Example
```bash
node --inspect debugging.js
```
Then:
1. Open Chrome and go to chrome://inspect
2. Click "Open dedicated DevTools for Node"
3. The debugger will pause at the breakpoint
4. Use the debugger to find the bug in the sum calculation

### Notes:

I've created a complete Node.js project that demonstrates the requested fundamentals. Here's what each file does:

1. `package.json:` Defines project metadata and dependencies (Express.js)
2. `fileIO.js:` Shows how to read, write, and append to files using the fs module
3. `server.js:` Creates a basic HTTP server using Express with example endpoints
4. `debugging.js:` Contains an example with a deliberate bug to practice debugging
5. `README.md:` Instructions for setup and running the examples

To get started:

1. Review the proposed changes and apply them
2. Run npm install to install dependencies
3. Try each example using the commands in the README

The examples demonstrate:

* File operations (sync and async)
* HTTP server with GET/POST endpoints
* Using console.log for debugging
* Using Node's built-in debugger
* Error handling
* Working with JSON
* Basic Express.js usage
