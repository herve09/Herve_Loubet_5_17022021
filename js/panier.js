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
      var x = await afficherArticle(idProduit, qty);
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
  

   //!info antony 
   /**
  async function(){
    const articles = await getArticles();
    //console.log(articles);
    for (let i in articles) {
        console.log(articles[i]);
    }

})()
 
  async function getArticles(){
    try {
        let res = await fetch('http://localhost:3000/api/teddies');
        return await res.json();
    }
    catch(error) {
        alert(error);
    }
  

    //! fin info antony fermeture balise } ligne 413
*/
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
    let qtyResultArticle = document.createElement("span");
    let moinsArticle = document.createElement("span");
    let supprimerArticle = document.createElement("td");
    let removeArticle = document.createElement("span")
   // let removeArticle = document.createElement("i");

    //Attribution des lass ou Id htlm
    ligneArticle.setAttribute("id", "article" + article._id);
    photoArticle.setAttribute("class", "photoarticle");
    photoArticle.setAttribute("width", "100px");
    photoArticle.setAttribute("src", article.imageUrl);
    photoArticle.setAttribute("alt", "Photo de l'article commandé");
    couleurArticle.setAttribute("couleur", "couleurarticle");
    qtyResultArticle.setAttribute("id", "result-" + article._id);
    plusArticle.setAttribute("id", "plus-" + article._id);
    plusArticle.setAttribute("class", "far fa-plus-square");
    moinsArticle.setAttribute("id", "moins-" + article._id);
    moinsArticle.setAttribute("class", "far fa-minus-square");
    removeArticle.setAttribute("id", "remove" + article._id);
    removeArticle.setAttribute("class", "far fa-trash-alt"); 
        prixTotalArticle.setAttribute("class", "totalProduit");

    //!Supprimer un produit qui est dans le panier

    function annulerArticle(i) {
      console.log(i);
     // let videpanier = document.createElement("button");
      //videpanier.setAttribute("class", "videpanier");
      //panier.splice(i, 1);
     // localStorage.clear();
      //Mise à jour nouveau panier avec suppression de l'article
      localStorage.setItem("panier", JSON.stringify(panier));
      //Mise à jour page pour affichage de la suppression au client
      window.location.reload();
    }

    /** function suppression(ligne) {
  document.getElementById('ligneArticle').deleteRow();
}
    */

/**
    removeArticle.addEventListener("click", function (e) {
     remove(article._id); //document.getElementById(ligneArticle).reset();
    });
   
**/
    //Contenu de chaque ligne

    nomArticle.textContent = article.name;
    prixUnitArticle.textContent = (article.price / 100).toFixed(2);
    qtyResultArticle.textContent = qty;
    prixTotalArticle.textContent =
      ((article.price * qty) / 100).toFixed(2) + " €";
    /****************************************************************** */

    //Agencement  HTML
    recapTable.appendChild(ligneArticle);
    ligneArticle.appendChild(photoArticle);
    ligneArticle.appendChild(nomArticle);
    ligneArticle.appendChild(prixUnitArticle);
    qtyArticle.appendChild(moinsArticle);
    qtyArticle.appendChild(qtyResultArticle);
    qtyArticle.appendChild(plusArticle);
    ligneArticle.appendChild(qtyArticle);
    ligneArticle.appendChild(prixTotalArticle);
    ligneArticle.appendChild(supprimerArticle);
    supprimerArticle.appendChild(removeArticle);

    /***************************************************************** */
    //!plus moins
    //result = parseInt(qty.value, 10);

    let result = document.getElementById("result-" + article._id);
    let spanplus = document.createElement("span")
    let plus = document.getElementById("plus-" + article._id);
    let spanmoins = document.createElement("span");
    let moins = document.getElementById("moins-" + article._id);
   // plus.appendChild(qtyResultArticle);



   //moins.appendChild(qtyResultArticle);
    result.addEventListener("blur", function () {
    result = parseInt(result.value, 10);
    });

// boutton +
spanplus.addEventListener("click", function () {
  if (result >= 0 && result < 99) {
result++;
    document.getElementById("result") = result;
  }
});
    
   // console.log(result)
    //console.log(qty)
    // boutton -
    spanmoins.addEventListener("click", function () {
      if (result > 0 && result <= 99) {
        result--;
        document.getElementById("result").value = result;
      }

      // prendre en compte la modification du nombre au clavier
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
    var sommeCents = cents(sommeTotal);
    document.getElementById("sommeTotal").textContent =
      sommeTotal.toFixed(2) + " €";
  }
  //};  fin window


 

  /**********************prix avec 2 00final */

  function cents(price) {
    if (Number.isNaN(price)) return "00.00";
    let priceString = price.toString();
    return (
      priceString.slice(0, priceString.length - 2) +
      "," +
      priceString.slice(priceString.length - 2)
    );
  }
  /************************************************************************** */
  
  /******************************** */
  /********* */
  /**! **formulaire final */
  //! valider panier affichage du formaulaire au clic
  function afficherformulaire() {
    let validePanier = document.createElementById("validePanier");
    validePanier.textContent = "Valider le panier";
    let cacheBouton = document.createElementById("cacherBouton");
    validePanier.appendChild("panier-recap");
    cacheBouton.appendChild("panier-recap");
    validePanier.addEventListener("click", () => {
      formulaire.classList.toggle("d-none");
      cacheBouton.classList.add("d-none");
      console.log(validePanier);
    }); //!fin bouton valider

    let formulaire = document.createElementById("form");
    let nom = document.createElementById("nom");
    let prenom = document.createElementById("prenom");
    let mail = document.createElementById("mail");
    let adresse = document.createElementById("adresse");
    let ville = document.createElementById("ville");

    nom.append(Childform);
    prenom.append(Childform);
    mail.append(Childform);
    adresse.append(Childform);
    ville.append(Childform);

    nom.textContent = "Nom :";
    prenom.textContent = "Prénom :";
    mail.textContent = "Mail :";
    adresse.textContent = "Adresse :";
    ville.textContent = "Ville :";
  }
  //
  //
  //
  //formulaire vérification inputs
  checkInput = () => {
    //Controle caractere
    let checkNumber = /[0-9]/;
    let checkMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;

    //message fin de controle
    let checkMessage = "";

    //Récupération des inputs

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let ville = document.getElementById("ville").value;

    //test des inputs du formulaire

    //test nom
    if (
      checkNumber.test(nom) == true ||
      checkSpecialCharacter.test(nom) == true ||
      nom == ""
    ) {
      checkMessage =
        "Merci de vérifier les informations concernant votre nom. Les caractères spéciaux, les chiffres ne sont pas admis";
    } else {
      console.log("Nom accepté");
    }

    //test prénom
    if (
      checkNumber.test(nom) == true ||
      checkSpecialCharacter.test(nom) == true ||
      prenom == ""
    ) {
      checkMessage =
        "Merci de vérifier les informations concernant votre prénom. Les caractères spéciaux, les chiffres ne sont pas admis";
    } else {
      console.log("Nom accepté");
    }

    //Test mail
    if (checkMail.test(email) == false) {
      checkMessage =
        checkMessage +
        "\n" +
        "Merci de vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas admis";
    } else {
      console.log("Adresse mail acceptée");
    }

    //Test de l'adresse
    if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
      checkMessage =
        checkMessage +
        "\n" +
        "Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";

      //Test adresse
      if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
        checkMessage =
          checkMessage +
          "\n" +
          "Merci de vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";
      } else {
        console.log(" Adresse postale acceptée");
      }

      //Test de la ville
      if (
        checkSpecialCharacter.test(ville) == true ||
        checkNumber.test(ville) == true ||
        ville == ""
      ) {
        checkMessage =
          checkMessage +
          "\n" +
          "Merci de vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
      } else {
        console.log("Ville acceptée");
      }

      //Test ville
      if (
        checkSpecialCharacter.test(ville) == true ||
        checkNumber.test(ville) == true ||
        ville == ""
      ) {
        checkMessage =
          checkMessage +
          "\n" +
          "Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
      } else {
        console.log("Ville acceptée");
      }

      //Si un champ pas conforme => message d'alerte
      if (checkMessage != "") {
        alert(
          "Attention certaines données ne sont pas conformes :" +
            "\n" +
            checkMessage
        );
      }

      //formulaire ok---objet coordonnee
      else {
        contact = {
          votreNom: nom,
          votrePrenom: prenom,
          adresss: adresse,
          ville: ville,
          email: email,
        };
        return contact;
      }
    } //fin check caractere
  }; //fin check input
  //! fin formulaire
  
//!} fin info antony
}; // fin window