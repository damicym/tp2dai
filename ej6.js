import { safeParsearUrl } from "./src/modules/safeParsearUrl.js";

const url = 'htt://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'
const parsedUrl = safeParsearUrl(url)
if (parsedUrl) console.log(parsedUrl)