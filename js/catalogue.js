console.log('bonjour')

        window.onload = function get_body() {

            var x = document.getElementsByTagName("body")[0]

            fetch("http://localhost:3000/api/teddies")
                .then(res => res.json())
                  .then(res => {
                     for (let i = 0; i < res.length; i++) {
                            let displayCatalogue = document.getElementById('catalogueteddy')
                            let teddySection = document.createElement('section')

                            let img = document.createElement('img')
                            let name = document.createElement('h4')
                            let price = document.createElement('p')
                            let description = document.createElement('p')
                            let link = document.createElement('a')
                            let ajoutpanier = document.createElement("BUTTON")

                            teddySection.classList.add('teddySection')
                            img.classList.add('teddy_img')
                            name.classList.add('teddy_name')
                            price.classList.add('teddy_price')
                            description.classList.add('teddy_description')
                            link.classList.add('teddy_link')
                            ajoutpanier.classList.add('teddy_ajoutpanier')

                            img.src = res[i].imageUrl

                            name.textContent = res[i].name

                            price.textContent = res[i].price / 100 + " €"

                            description.textContent = res[i].description
                            link.href = "./pages.teddy.html?id=" + res[i].id
                            link.textContent = "Plus de détail"
                            ajoutpanier.textContent = 'Ajouter au panier'


                            teddySection.appendChild(img)
                            teddySection.appendChild(name)
                            teddySection.appendChild(price)
                            teddySection.appendChild(description)
                            teddySection.appendChild(link)
                            teddySection.appendChild(ajoutpanier)

    
                            displayCatalogue.appendChild(teddySection)
                          /** */
                        }
                 


                }
                  )
         
                  
            }