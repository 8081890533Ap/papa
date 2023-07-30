// Import required modules
const http = require('http');

// Define the port number to listen on
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the "Hello, World!" message to the client
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
