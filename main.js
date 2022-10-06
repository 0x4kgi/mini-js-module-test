// this is just a test shit i have done to understand modules

import { helloWorld } from "./modules/hello.js";
import { jsonData } from "./modules/otherModule.js";

// "async" fetch moment, see the imported
const jd = await jsonData();
const stringJd = JSON.stringify(jd);

helloWorld();
console.log(jd);

document.write("<br><br>The json data that has been loaded:<br><br>");
document.write(`<pre>${stringJd}</pre><br><br>`);
document.write("I have no idea what im doing (but i learned something :) )<br>");
document.write("I will never touch this code again, last changed: 2022-10-06 16:28");

