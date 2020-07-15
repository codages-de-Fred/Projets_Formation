/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
// classe des contacts
class Contact {
	constructor(nom, prenom, adresse, tel) {
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.tel = tel;
	}
	// pour décrire les contacts
	decrire() {
		return `${this.nom} ${this.prenom} réside à ${this.adresse}, son numéro de téléphone est le ${this.tel}`
	}
	
}
const Caroline = new Contact("Lévisse","Caroline","Montpellier","0632455685");
const Melodie = new Contact("Mélodie","Nelsonne","Nîmes","0652141215");

// tableaux des choix
let listeContacts = [Caroline,Melodie];
let choix = "";
while (choix !== 3) {
	
	choix = Number(prompt("Bonjour et bienvenu(e) dans le gestionnaire des contacts,faites votre choix: 1: voir la liste des contacts, 2: ajouter un contact ou 3: quitter le gestionnaire de contacts"));
	switch (choix) {	
		
		case 1: // voir la liste des contacts
		for (i=0; i < listeContacts.length; i++){
		console.log(listeContacts[i].decrire());
		}
		break;

	  	case 2:// ajouter un contact
		let newNom = prompt("Quel est son nom ?");
		let newPrenom = prompt("Quel est son prénom ?");
		let newAdresse = prompt("Quelle est son adresse ?")
		let newTel = prompt("Quel est son numéro de téléphone ?");
		let newEnregistrement = prompt("Sous quel nom voulez-vous l'enregistrer?");
		newEnregistrement = new Contact(newNom,newPrenom,newAdresse,newTel);
		listeContacts.push(newEnregistrement);
		console.log("Nouveau contact ajouté."); 
		break;

		case 3:
		console.log("merci d'avoir ouvert mon gestionnaire de contacts.");
		
	}
}

 

