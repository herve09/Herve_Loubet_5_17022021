console.log('bonjour')

        window.onload = function get_body() {

            var x = document.getElementsByTagName("body")[0]

            
           const URL = `http://localhost:3000/api/teddies`//`https://ab-p5-api.herokuapp.com/api/teddies`

            fetch(URL) /*("http://localhost:3000/api/teddies")*/
                .then(res => res.json())
                  .then(res => {
                     for (let i = 0; i < res.length; i++) {
                            let displayCatalogue = document.getElementById('catalogueteddy')
                            let teddyArticle = document.createElement('article')

                           

                            let img = document.createElement('img')
                            let name = document.createElement('h3')
                            let price = document.createElement('p')
                           let description = document.createElement('p')
                            let link = document.createElement('a')
                           let colors = document.createElement('colors')

                            teddyArticle.classList.add('teddyArticle')
                            img.classList.add('img')
                            name.classList.add('name')
                            price.classList.add('price')
                         description.classList.add('description')
                            link.classList.add('link')
                           colors.classList.add('colors')/**/
                            
                           
                            img.src = res[i].imageUrl

                            name.textContent = res[i].name

                            price.textContent = res[i].price / 100 + " €"

                       description.textContent = res[i].description

                            
                            link.href = "./article.html?id=" + res[i]._id
                            link.textContent = "Acheter ce produit"

                           /* colors.textContent = res[i].colors*/



                            teddyArticle.appendChild(img)
                            teddyArticle.appendChild(name)
                            teddyArticle.appendChild(price)
                     teddyArticle.appendChild(description)
                            teddyArticle.appendChild(link)
                           teddyArticle.appendChild(colors)
 
                            displayCatalogue.appendChild(teddyArticle)

                           
                          }
                   
  
  
                  }
                    )
           
                    
              }
                            
                         /**
                           let ajoutpanier = document.createElement("BUTTON")
                    
 ajoutpanier.classList.add('teddy_ajoutpanier')

 ajoutpanier.textContent = 'Ajouter au panier'

  teddySection.appendChild(ajoutpanier)

   */