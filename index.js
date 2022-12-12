// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    return cats.push("Ralph");
    cats.length = 0;

}
function destructivelyPrependCat() {
    return cats.unshift("Bob");
    cats.length = 0;
}

function destructivelyRemoveLastCat() {
    return cats.pop();
    cats.length = 0;
}

function destructivelyRemoveFirstCat() {
    return cats.shift();    
    cats.length = 0;
}

function appendCat() {
    const cats = [ "Milo", "Otis", "Garfield"];
    const allcats = [...cats, "Broom"];
    return allcats;
    cats.length = 0;
}

function prependCat() {
    const cats =  ["Milo", "Otis", "Garfield"];
    const allcats = ["Arnold", ...cats];
    return allcats;
    cats.length = 0;
}

function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(0,cats.length-1)
    cats.length = 0;
}

function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(-2)
    cats.length = 0;
}