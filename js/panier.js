console.log('bonjour')

        window.onload = function get_body() {

            var x = document.getElementsByTagName("body")[0]

            fetch("http://localhost:3000/api/teddies")
                .then(res => res.json())
                  .then(res => {
                     for (let i = 0; i < res.length; i++) {
                            let displayPanier = document.getElementById('panierteddy')
                            let teddySection = document.createElement('section')


                            let ligne = document.createElement('tr')

                            let imageCell = document.createElement('td')
                            let nameCell = document.createElement('td')
                            let colorCell = document.createElement('td')
                            let quantCell = document.createElement('td')
                            let puCell = document.createElement('td')
                            let totalCell = document.createElement('td')


                            let img = document.createElement('img')
                            let name = document.createElement('p')
                            let color = document.createElement('p')
                            let quant = document.createElement('p')
                            let pu = document.createElement('p')
                            let total = document.createElement('p')


        if(i < res.length){
            img.src = res[i].img
            name.textContent = res[i].name
            color.textContent = res[i].color
            quant.textContent = res[i].quant
            pu.textContent = res[i].pu/100 + " €"
         /**  total.textContent = res[i].total */


        }
        console.log()
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
                           */
                           
                            displayPanier.appendChild(teddySection)
                          /** */
                        }
                 


                }
                  )
         
                  
            }