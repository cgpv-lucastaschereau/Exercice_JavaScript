let age = 17;
let age1 = (age > 0) ? "Age valide" : "Age invalide";
console.log(age1);
let MajeurOuNon = (age >= 18) ? "Tu es majeur" : "Tu es mineur";
console.log(MajeurOuNon);

let nombre = 23;
let pair = (nombre % 2 === 0) ? "Le nombre est pair" : "Le nombre est impaire";
console.log(pair);

let note = 80;
if (note >= 90) {
    console.log("Excellent");
} else if (note >= 75) {
    console.log("Tres bien")
} else if (note >= 60) {
    console.log("Bien")
} else {
    console.log("Echec")
}

let temperature = -12;
if (temperature < 0) {
    console.log("Il gele")
} else if (temperature >= 0 && temperature <= 15) {
    console.log("Il fait frais")
} else if (temperature >= 16 && temperature <= 25) {
    console.log("Temperature agreable")
} else {
    console.log("Il fait chaud!")
}

let connecte = true || false;
let role = "admin" || "user";
if (connecte === true && role === "admin") {
    console.log("Bienvenue administrateur")
} else if (connecte === true && role === "user") {
    console.log("Bienvenue utilisateur")
} else if (connecte === true && role === "") {
    console.log("Bienvenue role inconnu")
} else {
    console.log("Acces refuse")
}

let saison = "septembre || octobre || novembre";
switch (saison) {
    case "decembre":
    case "janvier":
    case "fevrier":
        console.log("Hiver");
        break;
    case "mars":
    case "avril":
    case "mai":
        console.log("Printemps");
        break;
    case "juin":
    case "juillet":
    case "aout":
        console.log("Ete");
        break;
    case "septembre":
    case "octobre":
    case "novembre":
        console.log("Automne")
    default:
        return saison;
}