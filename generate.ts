const response = await fetch('https://cdnjs.cloudflare.com/ajax/libs/ajv/8.10.0/ajv7.min.js');
const responseText = await response.text();
await Deno.writeTextFile("./generated/ajv7.bundle.js", responseText + ";\nexport default Ajv;");