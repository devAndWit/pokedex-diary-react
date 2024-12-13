// sessionStorage - zum speichern der aktiven Seite

const storageKey = "activeSite";
const validSites = ["home", "favorite"];

function set(name) {
  name = name.trim().toLowerCase();
  let valid = validSites.includes(name);

  if (valid === false) {
    return validSites[0]; // fallback Site
  }

  sessionStorage(storageKey, name);
  return name;
}
