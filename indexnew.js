const fs=require("fs")

fs.writeFileSync("read.txt","helloooooooooooo")
fs.appendFileSync("read.txt","\nwelcomeeee ")
var data=fs.readFileSync("read.txt")
console.log(data.toString())

//to rename file 
fs.renameSync("read.txt","bk.txt")