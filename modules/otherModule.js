const data = async () => {
  const response = await fetch("./json.json");
  const json = await response.json();

  document.write("[./modules/otherModules.js] the json thingy has been loaded, check console AND <br>");

  return json;
}

export { data as jsonData };