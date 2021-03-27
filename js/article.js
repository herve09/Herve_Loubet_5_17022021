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

      /** ajouter au panier vu avec antony */

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
            product[idProduit].quantite++ //a modifier pour avoit le + 6 pour code += newQty-- base
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

/** 
//creation de la modale
let afficherModalchoix = () => {

  let positionElement1 = document.getElementById('modalChoix')

let modalchoix = `
<div class="modalcontainer" id="modalchoix">
<div class="modalachat"><a href="index.html">Continuez vos achats</a></div>
<div class="modalpanier"><a href="panier.html">Voir votre panier</a></div>
</div>
 `
//injection html
positionElement1.insertAdjancentHTML('afterend', modalchoix)
console.log(afficherModalchoix)
}

//affichage modalchoix
//afficherModalchoix()
console.log(afficherModalchoix)
 }) //addtocard fin
*/


    




/**fin vu avec antony seul apres replacer le } addtocart fin */

/**creation pop up */
  /**creation structure html du pop up 
  let modalchoix = document.createElement('modalchoix')
  let modalachat = document.createElement('a')
  let modalpanier = document.createElement('a')
 

TeddyArticle.appendChild(modalchoix)
modalchoix.appendChild(modalachat)
modalchoix.appendChild(modalpanier)

teddyArticle.classList.add('teddyArticle')
modalChoix.classList.add('modalchoix')
modalAchat.classList.add('modalachat')
modalPanier.classList.add('modalpanier')
console.log()
 */

      /**creation modal redirection panier ou continuer achat 

//modalachat.textContent = '<a href="index.html">Continuez vos achats</a>'
//modalpanier.textContent = '<a href="parnier.html">Consultez votre panier</a>'


ajoutpanier.addEventListener('DOMContentLoaded', function()  {
  let modalchoix = document.createElement('modalchoix')
let modalachat = document.createElement('a')
let modalpanier = document.createElement('a')

//modalchoix.appendChild(modalachat)
//modalchoix.appendChild(modalpanier)

modalachat.textContent = '<a href="index.html">Continuez vos achats</a>'
modalpanier.textContent = '<a href="parnier.html">Consultez votre panier</a>'

  var elems = document.querySelectorAll('modalchoix')
  var instances = M.Modal.init(modalachat, modalpanier)
})

$(document).ready(function(){
  $('.modalchoix').modalchoix();
});


console.log(modalchoix)

fin creation modal redirection panier ou continuer achat */
