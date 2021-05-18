window.onload = function get_body() {
  var x = document.getElementsByTagName("body")[0];

  function afficherformulaire() {
    let formulaire = document.createElementById("form");
    let nom = document.createElementById("nom");
    let prenom = document.createElementById("prenom");
    let mail = document.createElementById("mail");
    let adresse = document.createElementById("adresse");
    let ville = document.createElementById("ville");

    nom.append(Childform);
    prenom.append(Childform);
    mail.append(Childform);
    adresse.append(Childform);
    ville.append(Childform);

    nom.textContent = "Nom :";
    prenom.textContent = "Prénom :";
    mail.textContent = "Mail :";
    adresse.textContent = "Adresse :";
    ville.textContent = "Ville :";
  }
  //
  //
  //
  //formulaire vérification inputs
  checkInput = () => {
    //Controle caractere
    let checkNumber = /[0-9]/;
    let checkMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;

    //message fin de controle
    let checkMessage = "";

    //Récupération des inputs

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let ville = document.getElementById("ville").value;

    //test des inputs du formulaire

    //test nom
    if (
      checkNumber.test(nom) == true ||
      checkSpecialCharacter.test(nom) == true ||
      nom == ""
    ) {
      checkMessage =
        "Merci de vérifier les informations concernant votre nom. Les caractères spéciaux, les chiffres ne sont pas admis";
    } else {
      console.log("Nom accepté");
    }

    //test prénom
    if (
      checkNumber.test(nom) == true ||
      checkSpecialCharacter.test(nom) == true ||
      prenom == ""
    ) {
      checkMessage =
        "Merci de vérifier les informations concernant votre prénom. Les caractères spéciaux, les chiffres ne sont pas admis";
    } else {
      console.log("Nom accepté");
    }

    //Test mail
    if (checkMail.test(email) == false) {
      checkMessage =
        checkMessage +
        "\n" +
        "Merci de vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas admis";
    } else {
      console.log("Adresse mail acceptée");
    }

    //Test de l'adresse
    if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
      checkMessage =
        checkMessage +
        "\n" +
        "Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";

      //Test adresse
      if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
        checkMessage =
          checkMessage +
          "\n" +
          "Merci de vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés";
      } else {
        console.log(" Adresse postale acceptée");
      }

      //Test de la ville
      if (
        checkSpecialCharacter.test(ville) == true ||
        checkNumber.test(ville) == true ||
        ville == ""
      ) {
        checkMessage =
          checkMessage +
          "\n" +
          "Merci de vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
      } else {
        console.log("Ville acceptée");
      }

      //Test ville
      if (
        checkSpecialCharacter.test(ville) == true ||
        checkNumber.test(ville) == true ||
        ville == ""
      ) {
        checkMessage =
          checkMessage +
          "\n" +
          "Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés";
      } else {
        console.log("Ville acceptée");
      }

      //Si un champ pas conforme => message d'alerte
      if (checkMessage != "") {
        alert(
          "Attention certaines données ne sont pas conformes :" +
            "\n" +
            checkMessage
        );
      }

      //formulaire ok---objet coordonnee
      else {
        contact = {
          votreNom: nom,
          votrePrenom: prenom,
          adresss: adresse,
          ville: ville,
          email: email,
        };
        return contact;
      }
    } //fin check caractere
  }; //fin check input

  //!verif panier

  //!tableau recap commande
  //creation structure

  //strucutre dans page

  //contenu article nom prix

  //incrementation de chaque id

  //creation de ligne

  //attribut class

  //insertion html

  //contenu ligne nom prix

  //total ligne

  //total final
}; //fin window
