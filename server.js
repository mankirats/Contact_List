const { createReadStream } = require("fs");

const stream = createReadStream("public/sample-text-file.txt", {
  highWaterMark: 30000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});
// import * as http from "http";
// import _ from "lodash";

// let nestedArr = [1, 23, [3, [34]]];

// // let flatArr = ;

// // console.log(_.flattenDeep([1, [2, [3, 4, [5]]]]));

// let flattenArray = _.flatten([1, [2, 3, [4]]], true);

// console.log(_.flattenDeep([1, [2, 3, [4]]], true));

// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log(req.url);
//   res.write("Welcome to My Node Server Page");
//   res.end();
// });

// server.listen(5001);
