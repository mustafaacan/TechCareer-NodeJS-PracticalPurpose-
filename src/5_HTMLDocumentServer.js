// HTTP Modüle
const http = require("http");
const fs = require("fs");
const path = require("path");

/* 
WORKING ORDER

npm run tailwind (FOR CSS OUTPUT) (CLOSE)
npm run nodemon_HTMLServer
(on browser) http://localhost:1111

ALTERNATIVE PATH

npm i -D concurrently (FOR FIRST TIME)
npm run dev
*/

const serverDataObject = {
  host: "localhost", // If exist, domain name can be added
  port: 1111,
  statusCode: {
    success: 200,
    notFound: 404,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    internalServerError: 500,
  },
};

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

const server = http.createServer((request, response) => {
  console.log("URL:", request.url);
  const requestedPath = request.url === "/" ? "/index.html" : request.url;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(__dirname, safePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        response.writeHead(404, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        response.end("File not found");
        return;
      }

      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Server Error");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    response.writeHead(200, { "Content-Type": contentType });
    response.end(data);
  });
});

// PORT LISTEN

server.listen(serverDataObject.port, () => {
  console.log(
    `Server is listining Port. Please go to http://${serverDataObject.host}:${serverDataObject.port}`,
  );
});
