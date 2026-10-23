/**
 * Afficher un message a la console
 * @returns 
 */
function Exercice1() {
    console.log("texte1");
}
Exercice1(3);

/**
 * Afficher la saison selon le mois
 * @param {String} saison
 * @returns la sasion
 */
function SaisonMois(saison) {
    let saison1 = "Saison invalide"
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
            return saison1;
    }
    return saison1;
}
SaisonMois("septembre");

/**
 * afficher a la console si la personne entrer est majeur ou mineur
 * @param {nombre} age 
 * @returns si mineur ou non
 */
const estMajeur = (age) => {
    if (age >= 18) {
        return "Tu es majeur";
    }
    return "Tu es mineur";
}
console.log(estMajeur(20));


function Salutation() {
    let nom = prompt("Quel est votre nom?");
    let prenom = prompt("Quel est votre prenom");
    alert("Bonjour " + prenom + " " + nom);
}