const { readFileSync, writeFileSync } = require("fs");
const countries = JSON.parse(readFileSync("./countries.json", { encoding: "UTF-8" }));
const languages = JSON.parse(readFileSync("./languages.json", { encoding: "UTF-8" }));

const countryList = countries.map(country => ({
  label: country.translations.nl,
  value: country.alpha3Code,
}));

const langList = languages.map(language => ({
  label: language.translations.nl,
  value: language.alpha2,
}));

writeFileSync("./result.json", JSON.stringify({
  countryList,
  langList,
}, null, 2), { encoding: "UTF-8"});