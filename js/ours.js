console.log('bonjour')

window.onload = function get_body() {

    var x = document.getElementsByTagName("body")[0]
   


fetch ("http://localhost:3000/api/teddies")
.then(res => res.json())
.then ( function (data){for (var teddy in data) {
    console.log(data[teddy]["imageUrl"])
    console.log(data[teddy]["name"])
    console.log(data[teddy]["price"])
    }
})
.catch(error => alert("Erreur : " + error));







var parent = document.createElement("div")//div1
var p = document.createElement("p")
parent.append('je rajoute du texte dans le paragraphe')
var p1 = document.createElement('p')
parent.append('texte p1')
x.append(parent)
/***/
var parent1 = document.createElement('div')//div2
parent.append(parent1)
var p2 = document.createElement('p')
parent1.append('texte p2 dans nouvelle div')

}


