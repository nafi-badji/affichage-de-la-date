const number = 10;
 console.log(typeof number + " " + "4");
 const typeDeVariable = number. toString();


 alert("Le type de variable est:" + " " + number)

 let dateAujourdhui = new Date();
 console.log(dateAujourdhui);
 
 let jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
 let joursemaine = jours [dateAujourdhui.getDay()]
console.log(joursemaine);
 
 let mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
 let moisannee = mois [dateAujourdhui.getMonth()];
 console.log(moisannee);

let annee = dateAujourdhui.getFullYear();
console.log(annee);
let jourdumois = dateAujourdhui.getDate();
console.log(jourdumois);
 alert("la date d'aujourd'hui est :" + " " + joursemaine + " " + jourdumois +" " + moisannee + " " + annee)