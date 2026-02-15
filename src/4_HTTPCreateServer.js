// HTTP Modüle
const http = require("http");

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

const server = http.createServer((request, response) => {
  console.log("Server Created");
  //HEADER (both methods are acceptable)
  console.log("***** HEADER *****");
  response.setHeader("Content-Type", "application/json");
  //response.writeHead("Content-Type", "application/json");
  response.writeHead(serverDataObject.statusCode.success, {
    "Content-Type": "text/html; charset=utf-8",
  });

  //REQUEST
  console.log("***** REQUEST *****");
  console.log("request: ", request);
  console.log("request URL: ", request.url);
  console.log("request header: ", request.headers);
  console.log("request end time: ", request.headers.age);
  console.log("request host: ", request.headers.host);

  //RESPONSE
  console.log("***** RESPONSE *****");
  console.log(response);
  // Since server will be worked on Browser, HTML based commend needed.
  // For instance, for break, use </br> instead of \n
  response.write("Response Area</br>");

  response.end(
    `Welcome to Node.JS Server\n http://${serverDataObject.host}:${serverDataObject.port} `,
  );
});

// PORT LISTEN

server.listen(serverDataObject.port, () => {
  console.log(
    `Server is listining Port. Please go to http://${serverDataObject.host}:${serverDataObject.port}`,
  );
});
