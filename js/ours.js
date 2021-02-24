console.log('bonjour')

window.onload = function get_body() {

    var x = document.getElementsByTagName("body")[0]

    fetch("http://localhost:3000/api/teddies")
        .then(res => res.json())
        /*.then(function (data)*/ 
        .then(res => {
          /*  for (var teddy in data) {*/
          for (let i = 0; i < res.length; i++) {
              /* var names = name[i] */
                let displayCatalogue = document.getElementById('catalogueteddy')
                let teddySection = document.createElement('section')

                displayCatalogue.appendChild(teddySection)
                /* creation */
               
                let name = document.createElement('h4')

                /************** 
                .then(res => res.json())
        .then(res => {*/
                teddySection.classList.add('teddyname')
               
                name.classList.add('teddy_name')

                /******************* */
                name.textContent = this.name

                /******************** */
               
                teddySection.appendChild(name)
                displayCatalogue.appendChild(teddySection)
   /*     )
            }*/
                console.log(data[teddy]["name"])
/********************
                console.log(data[teddy]["imageUrl"])
                console.log(data[teddy]["name"])
                console.log(data[teddy]["price"])
                */
            }
        }
    )
 }

 
