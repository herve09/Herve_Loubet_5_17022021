console.log('bonjour')

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
    console.log(res)

    

    /**
         let link = document.createElement('a')
link.classList.add('link')
link.href = "./article.html?id=" + res[i]._id
                            link.textContent = "Plus de détail"
teddyArticle.appendChild(link)
         */

    let displayProduit = document.getElementById('produit')
    let teddyArticle = document.createElement('article')
    let img = document.createElement('img')
    let name = document.createElement('h3')
    let price = document.createElement('p')
    let description = document.createElement('p')
    let selec_colors = document.createElement('select')
   let colors = document.createElement('colors')
    let ajoutpanier = document.createElement('a')

    teddyArticle.classList.add('teddyArticle')
    img.classList.add('img')
    name.classList.add('name')
    price.classList.add('price')
    description.classList.add('description')
    
    ajoutpanier.setAttribute('id', 'ajoutpanier')

    selec_colors.classList.add('colors') 
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
    teddyArticle.appendChild(description)
    teddyArticle.appendChild(ajoutpanier)

    displayProduit.appendChild(teddyArticle)


    let choixColor = document.createElement('select')
    choixColor.setAttribute('id', 'color')
    teddyArticle.appendChild(choixColor)

    for (let i = 0; i < res.colors.length; i++) {


      let colorOption = document.createElement("option")
      colorOption.setAttribute('value', res.colors[i])
      colorOption.innerHTML = res.colors[i]

      choixColor.append(colorOption)
    }
    console.log('choixColor')

    /** soluce antony
    ajoutpanier = document.getDocumentById("ajoutpanier")

    ajoutpanier.addEventListener(click, function() {
      
    ajoutpanier.getDocumentById('name')
    ajoutpanier.getDocumentById('prix')
    }
    
    )
    console.log()

    */
   
/******** */

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





/******** */



  } /*****/ )

 

} //fin window-fin window

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
