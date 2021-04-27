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

//fin window}

/***

 ;
  var addcart = document.getElementById('ajoutpanier');
  console.log(addcart);
  addcart.addEventListener('click',function() {
  function allStorage() {
 
  var values = [];
  var keys = Object.keys(localStorage);
  var i = keys.length;
  console.log(keys);
 
  while ( i-- ) {
  values.push( localStorage.getItem(keys[i]) );
  }
 
  return values;
  }
  var test = allStorage();
  console.log(test[1]);
  });
  }




function recupStorage() {
  let objectEntries = localStorage.getItem('Object.entries')

  document.getElementById('key').value = quantite
console.log(key)
}//function recupstorage

} //window.onload

  *********************copie article.js

  let params = new URL(document.location).searchParams
  let idProduit = params.get('id')
 // console.log(idProduit)

 fetch(localStorage.data)//("http://localhost:3000/api/teddies/" + idProduit)
    .then(res => res.json())
    .then(res => {
      //console.log(res)

  let displayProduit = document.getElementById('produit')
      let teddyArticle = document.createElement('article')
      let img = document.createElement('img')
      let name = document.createElement('h3')
      let price = document.createElement('p')
      let selec_colors = document.createElement('select')
      let choixColor = document.createElement('select')
      let colors = document.createElement('colors')
      let description = document.createElement('p')
      let ajoutpanier = document.createElement('a')
      let newqty  = document.createElement('p')//

   

      teddyArticle.classList.add('teddyArticle')
      img.classList.add('img')
      name.classList.add('name')
      price.classList.add('price')
      selec_colors.classList.add('colors')
      description.classList.add('description')
      newqty.classList.add('quantite')//


      ajoutpanier.setAttribute('id', 'ajoutpanier')

      img.src = res.imageUrl
      name.textContent = res.name
      price.textContent = res.price / 100 + " €"
      description.textContent = res.description
      ajoutpanier.textContent = "Ajouter au panier"

      ajoutpanier.setAttribute('id', 'ajoutpanier')

      teddyArticle.appendChild(img)
      teddyArticle.appendChild(name)
      teddyArticle.appendChild(price)
      teddyArticle.appendChild(newqty)
      choixColor.setAttribute('id', 'color')
      teddyArticle.appendChild(choixColor)
      teddyArticle.appendChild(description)
      displayProduit.appendChild(teddyArticle)

      //let choixColor = document.createElement('select')

      teddyArticle.appendChild(ajoutpanier)

      for (let i = 0; i < res.colors.length; i++) {

        let colorOption = document.createElement("option")
        colorOption.setAttribute('value', res.colors[i])
        colorOption.innerHTML = res.colors[i]

        choixColor.append(colorOption)

      }

      /********************* ajouter au panier vu avec antony

      let addtocart = document.getElementById('ajoutpanier')
      console.log(addtocart)
      addtocart.addEventListener('click', function (e) {
        console.log(idProduit)

        let product = localStorage.getItem(idProduit)

        localStorage.setItem(idProduit, 1)

        console.log(product)

        console.log(Object.entries(localStorage))

        for (key in Object.entries(localStorage)) {
          if (key == idProduit) {
            let product = localStorage.getItem(idProduit)
            product[idProduit].quantite++ //a modifier pour avoit le + 6 pour code += newQty-- base produit++
            localStorage.setItem(idProduit, product)
          } else {
            localStorage.setItem(idProduit, 1)
          }
        } //for entries fin

       

      }) //addtocard fin antony
      document.getElementById("ajoutpanier").addEventListener("click", () => {
     //document.getElementById("ajoutpanier").onclick = function() {
      document.getElementById("modalchoix").style.display = "block";
  })

})//then fetch fin




} //window fin
*/

/** exemple ndm
//function panier_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 5; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("imag"+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
//}

*/

//window.onload = function get_body() {

//var x = document.getElementsByTagName("body")[0]

//let idproduit = document.createElement('idproduit')

//const idproduit = localStorage.getItem(idproduit)
//var quantité = localStorage.getItem(quantite)

//console.log(idproduit)

//creaton structure html du panier tableaupanier
//creaton structure html du panier tableaupanier

//let panier = localStorage.getItem(idProduit)
//console.log(panier)

/*
        console.log()
       
        displayPanier.appendChild(teddySection)
     

        console.log()
      }



    })

**/

/**
                           teddySection.classList.add('Sectionpanier')
                           img.classList.add('teddy_img')
                           name.classList.add('teddy_name')
                           price.classList.add('teddy_price')
                           
                         

                           img.src = res[i].imageUrl

                           name.textContent = res[i].name

                           price.textContent = res[i].price / 100 + " €"

                           teddySection.appendChild(img)
                           teddySection.appendChild(name)
                           teddySection.appendChild(price)
             **/
