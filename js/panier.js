console.log();
window.onload = function get_body() {
  var x = document.getElementsByTagName("body")[0];

  //le panier

  let recapTable = document.createElement("table");
  let ligneTableLigne = document.createElement("tr");
  let recapPhoto = document.createElement("th");
  let recapNom = document.createElement("th");
  let recapCouleur = document.createElement("th");
  let recapPrixUnitaire = document.createElement("th");
  let recapRemove = document.createElement("th");
  let ligneTotal = document.createElement("tr");
  let colonneTotal = document.createElement("th");
  let recapPrixPaye = document.createElement("td");

  console.log(recapTable);
  //mise en place dans la page

  let recapPanier = document.getElementById("panier-recap");
  ligneTableLigne.appendChild(recapPhoto);
  ligneTableLigne.appendChild(recapNom);
  ligneTableLigne.appendChild(recapCouleur);
  ligneTableLigne.appendChild(recapPrixUnitaire);
  ligneTableLigne.appendChild(recapRemove);
  recapTable.appendChild(ligneTableLigne);
  // recapPanier.appendChild(recap);

  //contenu des entetes
  recapPhoto.textContent = "Article";
  recapNom.textContent = "Nom";
  recapCouleur.textContent = "Couleur";
  recapPrixUnitaire.textContent = "Prix";
  recapRemove.textContent = "Annuler";

  //affichage article dans tableau panier avec for
  let sommeTotal = 0;

  var keys = Object.keys(localStorage);
  var i = keys.length;
  for (var key in keys) {
    var idProduit = keys[key];
    var qty = localStorage.getItem(keys[key]);
    console.log(idProduit + "" + qty);
    afficherArticle(idProduit, qty);
    i++;
  }

  async function getArticle(id) {
    let url = "http://localhost:3000/api/teddies/" + id;
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function afficherArticle(id, qty) {
    let article = await getArticle(id);

    let ligneArticle = document.createElement("tr");
    let photoArticle = document.createElement("img");
    let nomArticle = document.createElement("td");
    let couleurArticle = document.createElement("td");
    let prixUnitArticle = document.createElement("td");
    let supprimerArticle = document.createElement("td");
    let removeArticle = document.createElement("i");

    //Attribution des class ou Id htlm
    ligneArticle.setAttribute("id", "article" + article._id);
    photoArticle.setAttribute("class", "photoarticle");
    photoArticle.setAttribute("width", "100px");
    photoArticle.setAttribute("src", article.imageUrl);
    photoArticle.setAttribute("alt", "Photo de l'article commandé");
    couleurArticle.setAttribute("couleur", "couleurarticle");
    removeArticle.setAttribute("id", "remove" + article._id);
    removeArticle.setAttribute("class", "fas fa-times-circle fa-1x");
    removeArticle.setAttribute("title", "Supprimer article ?");

    //Supprimer un produit qui est dans le panier
    removeArticle.addEventListener("click", (event) => {
      this.annulerArticle(i);
    });

    //Agencement  HTML
    recapTable.appendChild(ligneArticle);
    ligneArticle.appendChild(photoArticle);
    ligneArticle.appendChild(nomArticle);
    ligneArticle.appendChild(prixUnitArticle);
    ligneArticle.appendChild(supprimerArticle);
    supprimerArticle.appendChild(removeArticle);

    //Contenu de chaque ligne

    nomArticle.textContent = article.name;
    prixUnitArticle.textContent = article.price / 100 + " €";
    sommeTotal += (article.price * qty) / 100;
  }

  //console.log(panier);

  //total du tableau
  recapTable.appendChild(ligneTotal);
  ligneTotal.appendChild(colonneTotal);
  ligneTotal.setAttribute("id", "ligneSomme");
  colonneTotal.textContent = "Total à payer";
  ligneTotal.appendChild(recapPrixPaye);

  recapPrixPaye.setAttribute("id", "sommeTotal");
  recapPrixPaye.setAttribute("colspan", "4");
  colonneTotal.setAttribute("id", "colonneTotal");
  colonneTotal.setAttribute("colspan", "2");

  //prix total à payer
  console.log(sommeTotal);
  document.getElementById("sommeTotal").textContent = sommeTotal + " €";
}; // fin window

annulerArticle = (i) => {
  //  panier.splice(i, 1);
  localStorage.clear();
  // Mise à jour nouveau panier avec suppression de l'article
  //  localStorage.setItem("panier", JSON.stringify(panier));
  //Mise à jour page pour affichage de la suppression au client
  window.location.reload();
};
