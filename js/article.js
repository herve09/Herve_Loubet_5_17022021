console.log('bonjour')

/*const Base_URL = "http://localhost:3000/api/teddies/" + idProduit*/
/*
window.onload = function get_body() {

  var x = document.getElementsByTagName("body")[0]
**/
    let params = new URL(document.location).searchParams
    let idProduit = params.get('id')
console.log(idProduit)


    fetch("http://localhost:3000/api/teddies/" + idProduit)
    .then(res => res.json())
      .then(res => { console.log(res)
     
           let displayProduit = document.getElementById('produit')
            let teddyArticle = document.createElement('article')

            let img = document.createElement('img')
            let name = document.createElement('h4')
            let price = document.createElement('p')
            let description = document.createElement('p')
          let selec_colors = document.createElement('select')
          let colors = document.createElement('colors') /**dimanche */

            teddyArticle.classList.add('teddyArticle')
            img.classList.add('img')
            name.classList.add('name')
            price.classList.add('price')
            description.classList.add('description')
           selec_colors.classList.add('colors')
           
            img.src = res.imageUrl
            name.textContent = res.name
            price.textContent = res.price / 100 + " €"
            description.textContent = res.description
                  
            teddyArticle.appendChild(img)
            teddyArticle.appendChild(name)
            teddyArticle.appendChild(price)
            teddyArticle.appendChild(description)
         teddyArticle.appendChild(selec_colors)
           
            displayProduit.appendChild(teddyArticle)
            

         /* }*/
         
         /*for(let j = 0; j < ours[i].colors[j].length; j++)*/
        for(let i = 0; i < res.colors.length; i++)
                { 


          let colorOption = document.createElement("option")
          colorOption.setAttribute('value', colors[i].length)
          colorOption.innerHTML = colors[i]
          choixColor.append(colorOption)
          let choixColor = document.createElement('select')

        
          /* document.getElementById('selec_colors').options[0] */
       
           console.log('option_colors')



        }
      } /*****/
      )
      /*

 (value je crois) res.colors[i] et tu appendChild dans ton select d'avant


} */
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






   /*  for (let colors = 0; colors < res[colors].length; colors++) {
          let teddyArticle = document.createElement('article')
          let color = document.createElement('p')

          teddyArticle.classList.add('teddyArticle')
          color.classList.add('color')

            
          color.textContent = res.color

     teddyArticle.appendChild(color)

console.log(colors)
        } */