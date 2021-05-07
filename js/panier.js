console.log();
window.onload = function get_body() {
  var x = document.getElementsByTagName("body")[0];

  //le panier

  let recapTable = document.createElement("table");
  let ligneTableLigne = document.createElement("tr");
  let recapPhoto = document.createElement("td");
  let recapNom = document.createElement("td");
  let recapCouleur = document.createElement("td");
  let recapPrixUnitaire = document.createElement("td");
  let recapPrixTotalArticle = document.createElement("td"); //deplacement prixtotalarticle
  let recapRemove = document.createElement("td");
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
  ligneTableLigne.appendChild(recapPrixTotalArticle); //ajoute manque colonne sur tableau
  ligneTableLigne.appendChild(recapRemove);
  recapTable.appendChild(ligneTableLigne);
  recapPanier.appendChild(recapTable);

  //contenu des entetes
  recapPhoto.textContent = "Article";
  recapNom.textContent = "Nom";
  recapCouleur.textContent = "Prix";
  recapPrixUnitaire.textContent = "Quantité";
  recapPrixTotalArticle.textContent = "Total";
  recapRemove.textContent = "Supprimer"; //colonne supprimer

  //affichage article dans tableau panier avec for
  let sommeTotal = 0;

  async function AfficherTableau() {
    var keys = Object.keys(localStorage);
    var i = keys.length;

    for (var key in keys) {
      var idProduit = keys[key];
      var qty = localStorage.getItem(keys[key]);
      console.log(idProduit + "" + qty);
      //  var x = await afficherArticle(idProduit, qty);
      i++;
    }
    afficherTotal();
  }
  AfficherTableau();

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
    let qtyArticle = document.createElement("td");
    let prixTotalArticle = document.createElement("td");
    let plusArticle = document.createElement("span");
    let qytResultArticle = document.createElement("span");
    let moinsArticle = document.createElement("span");
    let supprimerArticle = document.createElement("td");
    let removeArticle = document.createElement("i");

    //Attribution des class ou Id htlm
    ligneArticle.setAttribute("id", "article" + article._id);
    photoArticle.setAttribute("class", "photoarticle");
    photoArticle.setAttribute("width", "100px");
    photoArticle.setAttribute("src", article.imageUrl);
    photoArticle.setAttribute("alt", "Photo de l'article commandé");
    couleurArticle.setAttribute("couleur", "couleurarticle");
    qtyResultArticle.setAttribute("id", "result-" + article._id);
    plusArticle.setAttribute("id", "plus" + article._id);
    plusArticle.setAttribute("class", "far fa-plus-square");
    moinsArticle.setAttribute("id", "moins" + article - id);
    moinsArticle.setAttribute("class", "far fa-minus-square");
    removeArticle.setAttribute("id", "remove" + article._id);
    removeArticle.setAttribute("class", " far fa-trash-alt");
    removeArticle.setAttribute("title", "Supprimer article ?");
    prixTotalArticle.setAttribute("class", "totalProduit");

    //Supprimer un produit qui est dans le panier
    removeArticle.addEventListener("click", (event) => {
      this.annulerArticle(i);
    });

    //Contenu de chaque ligne

    nomArticle.textContent = article.name;
    prixUnitArticle.textContent = (article.price / 100).toFixed(2);
    qtyResultArticle.textContent = qty;

    prixTotalArticle.textContent =
      ((article.price * qty) / 100).toFixed(2) + " €";

    /********************************************************************************************************** */

    //Agencement  HTML
    recapTable.appendChild(ligneArticle);
    ligneArticle.appendChild(photoArticle);
    ligneArticle.appendChild(nomArticle);
    ligneArticle.appendChild(prixUnitArticle);
    qtyArticle.appendChild(moinsarticle);
    qtyArticle.appendChild(qtyResultArticle);
    qtyArticle.appendChild(plusArticle);
    ligneArticle.appendChild(qtyArticle);
    ligneArticle.appendChild(prixTotalArticle);
    ligneArticle.appendChild(supprimerArticle);
    supprimerArticle.appendChild(removeArticle);

    /***************************************************************** */
    //plus moins
    //result = parseInt(qty.value, 10);

    let qtyResult = document.getElementById("result-" + article._id);
    let plus = document.getElementById("plus");
    let moins = document.getElementById("moins");
    //plus.appendChild(qty);
    //moins.appendChild(qty);
    qty.addEventListener("blur", function () {
      result = parseInt(result.value, 10);
    });

    // boutton +
    plus.addEventListener("click", function () {
      if (result >= 0 && result < 99) {
        result++;
        document.getElementById("result").value = result;
      }
    });

    // boutton -
    moins.addEventListener("click", function () {
      if (result > 0 && result <= 99) {
        result--;
        document.getElementById("result").value = result;
      }
    });
  }

  /*************************************************************** */
  //console.log(panier);
  function afficherTotal() {
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
    var totaux = document.getElementsByClassName("totalProduit");
    //console.log(totaux, totaux.length);
    for (var i = 0; i < totaux.length; i++) {
      console.log(totaux[i].innerText);
      sommeTotal += parseInt(totaux[i].innerText);
    }
    console.log(sommeTotal);
    document.getElementById("sommeTotal").textContent =
      sommeTotal.toFixed(2) + " €";
  }
}; // fin window
/**
annulerArticle = (i) => {
  let videpanier = document.createElement("button");
  videpanier.setAttribute("class", "videpanier");
  panier.splice(i, 1);
  localStorage.clear();
  //Mise à jour nouveau panier avec suppression de l'article
  localStorage.setItem("panier", JSON.stringify(panier));
  //Mise à jour page pour affichage de la suppression au client
  window.location.reload();
};
**/
