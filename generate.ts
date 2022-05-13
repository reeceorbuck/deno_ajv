const response = await fetch('https://cdnjs.cloudflare.com/ajax/libs/ajv/8.10.0/ajv7.min.js');
const responseText = await response.text();
await Deno.writeTextFile("./generated/ajv7.min.js", responseText + ";\nexport default Ajv;");

const map = await fetch('https://cdnjs.cloudflare.com/ajax/libs/ajv/8.10.0/ajv7.min.js.map');
const mapText = await map.text();
await Deno.writeTextFile("./generated/ajv7.min.js.map", mapText);