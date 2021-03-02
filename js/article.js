
const queryString_url_id = window.location.search
 console.log(queryString_url_id)   
 
 fetch("http://localhost:3000/api/teddies/" + queryString_url_id)
 const leid = queryString_url_id.slice(4)
 console.log(leid)
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
            

             

            
           }
    


   }
     )

 /*    
}
*/


























  /*
 const leid = queryString_url_id.slice(4)
 console.log(leid)
*/
/*
let params = (new URL(document.location)).searchParams





let name = params.get('name')



let imageurl = params.get('img')
let description = params.get('desciption')
let color = params.get('couleur')
let price = params.get('prix')
*/
/*
teddySection.classList.add('teddySection')
name.classList.add('teddy_name')

img.classList.add('teddy_img')




price.classList.add('teddy_price')
description.classList.add('teddy_description')


name.textContent = res[i].name
name.classList.add('teddy_name')

teddyArticle.appendChild(name)

console.log(params)
*/


                    

