const glob = require("glob");
const files = glob.sync('./**/*.function.js', { cwd: __dirname, ignore: './node_modules/**'});
for(let f=0,fl=files.length; f<fl; f++) {
    const file = files[f];
    const functionName = file.split("/").pop().slice(0, -12); // Strip off '.functions.js'
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
        exports[functionName] = require(file);
    }
}