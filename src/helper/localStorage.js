// localStorage - zum speichern der Favoriten

const storageKey = "pokemonList";

function validate(id) {
  if (typeof id === "string" && /^[0-9]+$/.test(id.trim())) {
    id = parseInt(id.trim());
  }

  if (typeof id === "number" && id >= 0 && id % 1 === 0) {
    return id;
  }

  return false;
}

export function addFavorite(id) {
  let valid = validate(id);

  if (valid === false) {
    return false;
  }

  if (findFavorite(id)) {
    return;
  }

  localStorage.setItem(
    storageKey,
    JSON.stringify([...allFavorite(), id].sort())
  );
}

export function allFavorite() {
  let data = JSON.parse(localStorage.getItem(storageKey)) || [];
  data = data.sort();
  return data;
}

export function findFavorite(id) {
  let valid = validate(id);

  if (valid === false) {
    console.log("Error: id is not valid", id);
    return false;
  }

  allFavorite().forEach(function (fav) {
    if (fav === id) {
      return true;
    }
  });

  return false;
}

export function removeFavorite(id) {
  let valid = validate(id);

  if (valid === false) {
    console.log("Error: id is not valid", id);
    return false;
  }

  let data = allFavorite();

  data = data.filter((item) => {
    return item === id ? false : true;
  });

  clear();

  localStorage.setItem(storageKey, JSON.stringify(data.sort()));
}

export function clear() {
  localStorage.clear();
}

// Test-Script
// clear();
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// addFavorite(50);
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// addFavorite(50);
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// addFavorite("50");
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// addFavorite("60");
// addFavorite("70");
// addFavorite("80");
// addFavorite("90");
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// removeFavorite("50");
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// removeFavorite("60");
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// removeFavorite("20");
// console.log(JSON.parse(localStorage.getItem(storageKey)));
// console.log(allFavorite());
// console.log(findFavorite(70));
// console.log(findFavorite(100));
// clear();
// console.log(allFavorite());
// console.log(findFavorite(70));
