const data = [
    "maison", "chat", "chien", "voiture", "arbre", "soleil", "ordinateur", "musique", "livre", "montagne",
    "fleur", "chocolat", "plage", "avion", "poisson", "forêt", "ville", "rivière", "château", "paysage",
    "jardin", "école", "hôpital", "pont", "lac", "mer", "route", "vélo", "train", "oiseau", "parc", 
    "pluie", "hiver", "été", "printemps", "automne", "neige", "feuille", "vent", "nuage", "étoile"
];

function getWord(data) {
    if (data.length === 0) return null;
    const randomWord = data[Math.floor(Math.random() * data.length)];
    return Array.from(randomWord);
}
export default getWord
