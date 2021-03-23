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

      /********************* vu avec antony */

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
            product += newQty
            localStorage.setItem(idProduit, product)
          } else {
            localStorage.setItem(idProduit, 1)
          }
        } //for entries fin

      }) //addtocard fin

    })//fetch fin

/**creation modal redirection panier ou continuer achat */



} //window fin 