import { parsearUrl } from "./src/modules/parsearUrl.js"

const url = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'
const parsedUrl = parsearUrl(url)
console.log(parsedUrl)