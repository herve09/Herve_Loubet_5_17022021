console.log('bonjour')

        window.onload = function get_body() {

            var x = document.getElementsByTagName("body")[0]

            fetch("http://localhost:3000/api/teddies")
                .then(res => res.json())
                  .then(res => {
                     for (let i = 0; i < res.length; i++) {
                            let displayCatalogue = document.getElementById('catalogueteddy')
                            let teddyArticle = document.createElement('article')

                           

                            let img = document.createElement('img')
                            let name = document.createElement('h4')
                            let price = document.createElement('p')
                            let description = document.createElement('p')
                            let link = document.createElement('a')
                            

                            teddyArticle.classList.add('teddyArticle')
                            img.classList.add('teddy_img')
                            name.classList.add('teddy_name')
                            price.classList.add('teddy_price')
                            description.classList.add('teddy_description')
                            link.classList.add('teddy_link')
                           
                            img.src = res[i].imageUrl

                            name.textContent = res[i].name

                            price.textContent = res[i].price / 100 + " €"

                            description.textContent = res[i].description
                            link.href = "./article.html?id=" + res[i]._id
                            link.textContent = "Plus de détail"
                           


                            teddyArticle.appendChild(img)
                            teddyArticle.appendChild(name)
                            teddyArticle.appendChild(price)
                            teddyArticle.appendChild(description)
                            teddyArticle.appendChild(link)
                           
 
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