console.log('bonjour')

/**

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));

console.log()

**/




fetch ("http://localhost:3000/api/teddies")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => alert("Erreur : " + error));


var x = document.getElementsByTagName("BODY")[0]



var parent = document.createElement("div")
var p = document.createElement("p")
parent.append('je rajoute du texte dans le paragraphe')
var p1 = document.createElement('p')
parent.append('texte p1')
console.log(parent)
/***/
var parent1 = document.createElement('div')//div2

var p2 = document.createElement('p')
parent1.append('texte p2 dans nouvelle div')


console.log(parent1)// NodeList [ <p> ]

/********************************************/

/*
var newP = document.createElement('p')
newP.textContent = 'paragraphe1'
newP.appendChild(divNew)
console.log(newP)


var myDiv = document.createElement("div");
myDiv.setAttribute("id", "myDivId");
myDiv.setAttribute("title", "Message de titre");
console.log(myDiv);




const colors = document.getElementsByTagName('colors')
const thirdColors = colors[2]
console.log(colors)


const elt = document.getElementById('main')



 







var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/api/teddies");
xhr.onreadystatechange = function() {
   if (this.readyState < 4) return;
   if (this.status !== 200) {
      console.log("erreur réseau : " + this.status + " " + this.statusText);
   } else {
      document.getElementById("la-div")
         .appendChild(document.createTextNode(this.responseText));
   }
};
xhr.send();



 var myDiv=document.createElement("div");
 myDiv.setAttribute("id", "myDivId");
 myDiv.setAttribute("title", "Message de titre");
 console.log(myDiv);


    fetch ("http://localhost:3000/api/teddies")
    .then(res => res.json())
    .then(data => console.log(data))
    console.log()
    



console.log(newP)
   
const img = document.getElementByName(imageUrl);
 
fetch ("http://localhost:3000/api/teddies")
    .then(res => res.json())
    .then(data => imageUrl = data[0].imageUrl);

   console.log(imageUrl)

*/
/*
    fetch ("http://localhost:3000/api/teddies")
    .then(res => res.json())
    .then(data => console.log(data))

 */ 

/* 
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies");
request.send();
console.log()


document.querySelector(body)



console.log('Norbert')


var names = document.getElementsByName('name');
 for (var i = 0, i = names.length ; i++)
  



console.log()

const ours = {
    id: "id ours",
    name: "Nom ours",
    price: "prix de l'ours",
    imageUrl: "url image",
    description: "descrition ours",

}


 console.log()


 let b = document.body;
 let newP = document.createElement('p');
 let newTexte = document.createTextNode('Texte écrit en JavaScript');
 
 newP.textContent = 'Paragraphe créé et inséré grâce au JavaScript';
 
 //Ajoute le paragraphe créé comme premier enfant de l'élément body
 b.prepend(newP);
 
 //Ajoute le texte créé comme dernier enfant de l'élément body
 b.append(newTexte);
  console.log()
 */