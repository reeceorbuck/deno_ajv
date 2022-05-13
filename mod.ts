import Ajv7 from "./generated/ajv7.bundle.js";

if (new Set(Deno.args).has("generate")) {
  const response = await fetch('https://cdnjs.cloudflare.com/ajax/libs/ajv/8.10.0/ajv7.bundle.js');
  const responseText = await response.text();
  await Deno.writeTextFile("./generated/ajv7.bundle.js", responseText + "export default Ajv");
}

export default Ajv7;