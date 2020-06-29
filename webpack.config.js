const { resolve } = require("path");
const folderCleaner = require("./webpack-folder-cleaner");

module.exports = {
 entry: resolve(__dirname, "src/index.js"),
 output: {
   path: resolve(__dirname, "bin"),
   filename: "bundle.js"
 },
 plugins: [
     new folderCleaner({
     "folders": ['folder1','folder2', 'folder3'],
     "ignoreFiles": ['bin/file.js', 'bin/index.js']
 })]
};