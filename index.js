const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      var date = new Date();
      console.log("Error reading the file ", file, " at ", date);
    } 
    res.end(data);
  });
};

router.get("/lab1-css.css", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/css/lab1-css.css", res);
});

router.get("/", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/index.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/books.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});


router.get("/book1.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/book1.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/p1.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-lightning-thief-215x300.png", res);
});

router.get("/book2.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/book2.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/p2.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/p2.png", res);
});

router.get("/book3.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/book3.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/p3.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-titans-curse-3D-215x300.png", res);
});


router.post("/", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  res.end("POSTED");
});

http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);