let fs = require("fs");

fs.writeFileSync("india.docx", "I am a india",function(err){
    console.log(err);
});

console.log(__dirname);
