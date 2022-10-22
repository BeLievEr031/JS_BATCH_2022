// let fs = require("fs");
// let path = require("path");

// // let x = fs.writeFile("./f1.txt", "i am a f1", (err) => {
// // //   console.log(err);
// // });

// // // console.log(x);

// // fs.readFile("f1.txt", (err, data) => {
// //   console.log(data+"");
// // });

// // let p = path.join(__dirname,"f1.txt")
// // console.log(p);

// // let file = fs.lstatSync(p).isFile()
// // console.log(file);

// let x = fs.readdirSync(__dirname);
// console.log(x);

// for (let i = 0; i < x.length; i++) {
//   let isFile = fs.lstatSync(path.join(__dirname, x[i])).isFile();
// //   console.log(isFile);

//   if (isFile) {
//     console.log(path.extname(path.join(__dirname, x[i])));
//   }
// }
