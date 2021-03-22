//console.log('bonjour')

/*const Base_URL = "http://localhost:3000/api/teddies/" + idProduit*/
/*
window.onload = function get_body() {

  var x = document.getElementsByTagName("body")[0]
const url ='http://localhost:3000/api/teddies/'

  const BASKET = Json.parse(localstorage.getItem('teddys')) || []
**/



console.log()
window.onload = function get_body() {

    var x = document.getElementsByTagName("body")[0]



    let params = new URL(document.location).searchParams
    let idProduit = params.get('id')
    console.log(idProduit)


    fetch("http://localhost:3000/api/teddies/" + idProduit)
      .then(res => res.json())
      .then(res => {
          //console.log(res)


          let displayProduit = document.getElementById('produit')
          let teddyArticle = document.createElement('article')
          let img = document.createElement('img')
          let name = document.createElement('h3')
          let price = document.createElement('p')
          
          let selec_colors = document.createElement('select')
          let choixColor = document.createElement('select')//
          let colors = document.createElement('colors')
          let description = document.createElement('p')
          let ajoutpanier = document.createElement('a')



          teddyArticle.classList.add('teddyArticle')
          img.classList.add('img')
          name.classList.add('name')
          price.classList.add('price')
          selec_colors.classList.add('colors')
          description.classList.add('description')

          ajoutpanier.setAttribute('id', 'ajoutpanier')

          
          /* ajoutpanier.classList.add('ajoutpanier')*/




          img.src = res.imageUrl
          name.textContent = res.name
          price.textContent = res.price / 100 + " €"
          description.textContent = res.description
          /* selec_colors.textContent = "Choisissez la couleur" res.select
             ajoutpanier.href = "./validation.html"*/
          ajoutpanier.textContent = "Ajouter au panier"

          ajoutpanier.setAttribute('id', 'ajoutpanier')

          teddyArticle.appendChild(img)
          teddyArticle.appendChild(name)
          teddyArticle.appendChild(price)


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
        

/********************* vu avec antony */

          let addtocart = document.getElementById('ajoutpanier')
          console.log(addtocart)
          addtocart.addEventListener('click', function(e) {
           console.log(idProduit)

          let product = localStorage.getItem(idProduit)
        
         localStorage.setItem(idProduit, 1)

         console.log(product) 

         console.log(Object.entries(localStorage))

         for (key in Object.entries(localStorage)) {
          console.log(key)
          }
          /**000000 creation du panier */

class panier {
  constructor(id, name, descritpion, price, option, quantite, imgurl)
  //this.idproduit = idproduit
  //this.name = name
  //this.description = description
  //this.price = price
  //this.option = option
  //this.quantite = quantite
  //this.imgurl = imgurl



/** } */

/******* 11111111111111111111111111111111111*/
          // test de presence du produit dans le panier

          let estPresent = false
          let augmenteQuantite  

          for (product of panier) {
            switch (product.quantite) {
              case object.entries.quantite:
                estPresent = true
                augmentequantite = panier.indexOf(product)
            }

          }

          //si present dans la panier augmente juste la quantité
            if(estPresent) {
              Panier[augmenteQuantite].quantite = 
              +panier[augmenteQuantité].quantite + +objectEntries.quantite
              localStorage.sitItem('teddy', JSON.tringify(panier))

            }

            //pas present ajout du produit 
            else {
              panier.push(objectEntries)
              localStorage.setItem('teddy', JSON.stringify(panier))

            }
/** 111111111111111111111111111111111111 **/

/***2222222222222222222222222222222222222 */
 //total panier
 function displaytotalPanier() {
   let totalPanier = 0
   panier.forEach((teddy) => {
     totalPanier = totalPanier + teddy.price * teddy.quantite
   })
   return totalPanier
 }




/**2222222222222222222222222222222 */

/** 3333333333333333333 recup contenu localstorage */

const panier = json.parse(localStorage.getItem('teddy')) || []




/**33333333333333333333333333333 */







         //ajout du tableau array pour le panier
/** 
         let addtocart = document.getElementById('ajoutpanier')
         console.log(addtocart)
         addtocart.addEventListener('click', function(e) {
          console.log(idProduit)
         
          
          var panier = []
          // setter
          localStorage.setItem("panier",  JSON.stringify(panier))
          //getter
         // var panier = JSON.parse(localStorage.getItem("panier"))

        



         localStorage.getItem(idProduit)
        
        localStorage.setItem(idProduit, 1)
        //let panier = JSON.parse(localStorage.getItem("idproduit"))
        console.log(panier) 
*/

         
        })


      })

      } //fin window-fin window
         
 /**
//array panier
var addtocart = []
localStorage.setItem(addtocart, JSON.stringify(addtocart))

//recupere localstorage
let panier = JSON.parse(localStorage.getItem('ajoutpanier'))
console.log(addtocart)

        *************/
         /********************* */
         /********************* */
        

        //creation nouveau produit a insere dans panier
/**
        class nouveau {
           constructor(id, name, description, price, option, quantite, img) {
             this.id = id
             this.name = name
             this.description = description
             this.price = +price
             this.option = option
             this.quantity = +quantity
             this.imgurl = imgurl

            
           }
           
        }
 

        
 */

/**
         //verification d ela presence de l'article dans le panier

         let present = false
         let nouveau
         for(product of idProduit) {
          /**  switch (product.option) {
              case objectProduct.option
            present = true
             nouveau = idProduit.indexOf(product)

           }


// si present increment quantite
if(present) {
  idProduit[nouveau].quantity = 
  +idproduit[nouveau].quantity + +objectProduct.quantity
  localStorage.getItem('teddy', json.stringify(idProduit))

}//fin if verification

//si pas present rajout de l'article dansle localstorage
else { product.push(objectproduct)
  localStorage.getItem("teddy', JSON.stringify(idProduit))

}//fin du else verificaton 

         }//fin boucle for verification

 */













        /** soluce antony    
           ajoutpanier = document.getDocumentById("ajoutpanier")

           ajoutpanier.addEventListener(click, function() {
             
           ajoutpanier.getDocumentById('name')
           ajoutpanier.getDocumentById('prix')
           }
           */

        /******** 

        //test 
        //declaration variable produitLocalStorage--je recupere article qui contient les données
        let article = json.parse(localStorage.getDocumentById(article)) 

        //si produit enregsitrés dans le localStorage

        if(article) {

        }

        //pas de produit enregistrés
        else {
          article = [] //creation tableau array
          article.push(article) 

          console.log(article)

        }

        */

        /******** */



        /**
        ajoutpanier = document.getDocumentById("ajoutpanier")

        ajoutpanier.addEventListener("click", function() {
        localStorage.setItem(id, json.stringify(color))
        })
        **/

        /********************recup donnees bouton*************************************
        //declaration variable produitLocalStorage--je recupere article qui contient les données
        let article = json.parse(localStorage.getDocumentById(article)) 

        //si produit enregsitrés dans le localStorage

        if(article) {

        }

        //pas de produit enregistrés
        else {
          article = [] //creation tableau array
          article.push(article) 

          console.log(article)

        }
        ***/


        /********************recup donnees bouton****************************************/
        /********************recup donnees bouton****************************************/


        /*document.getElementById('ajout')
        addEventListener('click', ajoutPanier)
        console.log()*/

        /**info mentor 

        ajoutpanier = document.getDocumentById("ajoutpanier")

        ajoutpanier.addEventListener(click, function() {
          
        ajoutpanier.getDocumentById('name')
        ajoutpanier.getDocumentById('prix')
        }

        )
        console.log()
        */


        /**fin info */



        /*
        function panierteddy() {
         ajoutpanier = document.querySelectorAll('plus')
          for (add of ajoutpanier) {
            add.addEventListener('click', event => {

              baskets[event.target.id].qte++;
              localStorage.setItem(0, JSON.stringify(baskets));
              location.reload();
            })
          }
        }
        console.log()



        console.log()






        document.getElementById('ajout').immerHTML = 'Ajouter au panier'

         (value je crois) res.colors[i] et tu appendChild dans ton select d'avant

         */

        /*
        function getColors() {
          return new Promise((resolve, eject) => {
          fetch ("http://localhost:3000/api/teddies/" + idProduit)
            .then(data => data.json()) 
            .then(colors => {
              console.log(colors)
              resolve(colors)
            })
        .catch(err => {
          reject(err)
          errDiv.inerText = "Impossible de récupérer la couleur"
        })
          })
        }

        getColors().then(data => {
          let option
          object.entries(data.colors).forEach(colors => {
            
          
            console.log(colors)
          })
        })
        */