"use strict";
var Validator = {
    
    firstName: false,
    lastName: false,
    postalCode: false,
    email: false,
    
    
    validateFirstName: function(input)
    {
        var firstNameField = document.getElementById("firstnamefield");
            
        if (firstNameField.lastChild.hasChildNodes()) // Tar bort eventuellt utskrivet felmeddelande
        {
            firstNameField.lastChild.remove(firstNameField.lastChild);
        }

        
        if (input.value.trim() == "")
        {
            
            var emptyErrorMessage = document.createTextNode("Detta fält får inte lämnas blankt."); // Själva felmeddelandet för för- och efternamn
            var emptyErrorTag = document.createElement("p"); // P-taggen som texten ska stoppas i
            emptyErrorTag.appendChild(emptyErrorMessage);
            firstNameField.appendChild(emptyErrorTag);
            Validator.firstName = false;
        }
        
        else
        {
            Validator.firstName = true;
        }
 
    },
    
    validateLastName: function(input)
    {
        var lastNameField = document.getElementById("lastnamefield");
            
        if (lastNameField.lastChild.hasChildNodes()) // Tar bort eventuellt utskrivet felmeddelande
        {
            lastNameField.lastChild.remove(lastNameField.lastChild);
        }

        if (input.value.trim() == "")
        {
            
            var emptyErrorMessage = document.createTextNode("Detta fält får inte lämnas blankt."); // Själva felmeddelandet för för- och efternamn
            var emptyErrorTag = document.createElement("p"); // P-taggen som texten ska stoppas i
            emptyErrorTag.appendChild(emptyErrorMessage);
            lastNameField.appendChild(emptyErrorTag);
            Validator.lastName = false;
        }
        
        else
        {
            Validator.lastName = true;
        }

    },
    
    validatePostalCode: function(input)
    {
        var postalCoderegExp = [];
        postalCoderegExp[0] = /^[0-9]{5}$/;
        postalCoderegExp[1] = /^[0-9]{3}-[0-9]{2}$/;
        postalCoderegExp[2] = /^[0-9]{3}\s[0-9]{2}$/;
        postalCoderegExp[3] = /^(SE)[0-9]{5}$/;
        postalCoderegExp[4] = /^(SE)[0-9]{3}-[0-9]{2}$/;
        postalCoderegExp[5] = /^(SE)[0-9]{3}\s[0-9]{2}$/;
        postalCoderegExp[6] = /^(SE)\s[0-9]{5}$/;
        postalCoderegExp[7] = /^(SE)\s[0-9]{3}-[0-9]{2}$/;
        postalCoderegExp[8] = /^(SE)\s[0-9]{3}\s[0-9]{2}$/;

        var postalCodeField = document.getElementById("postalcodefield");
            
        if (postalCodeField.lastChild.hasChildNodes()) // Tar bort eventuellt utskrivet felmeddelande
        {
            postalCodeField.lastChild.remove(postalCodeField.lastChild);
        }

        if (input.value.trim() == "")
        {
            var emptyErrorMessage = document.createTextNode("Detta fält får inte lämnas blankt."); // Själva felmeddelandet för för- och efternamn
            var emptyErrorTag = document.createElement("p"); // P-taggen som texten ska stoppas i
            emptyErrorTag.appendChild(emptyErrorMessage);
            postalCodeField.appendChild(emptyErrorTag);
            Validator.postalCode = false;
        }
        
        else
        {
            input.value = input.value.trim();
            
            var correctFormat = false;
            for (var i=0; i < postalCoderegExp.length; i++)
            {
                if (input.value.match(postalCoderegExp[i]))
                {
                    input.value = input.value.replace(/\s+/g, '');
                    input.value = input.value.replace(/(SE)/, '');
                    input.value = input.value.replace(/-/, '');
                    correctFormat = true;
                    Validator.postalCode = true;
                }
            }
            
            if (!correctFormat)
            {    
                    postalCodeField = document.getElementById("postalcodefield");
            
                    if (postalCodeField.lastChild.hasChildNodes()) // Tar bort eventuellt utskrivet felmeddelande
                    {
                        postalCodeField.lastChild.remove(postalCodeField.lastChild);
                    }

                    var incorrectFormatMessage = document.createTextNode("Ogiltigt format");
                    var incorrectFormatTag = document.createElement("p");
                    incorrectFormatTag.appendChild(incorrectFormatMessage);
                    postalCodeField.appendChild(incorrectFormatTag);
                    Validator.postalCode = false;
            }   
           
        }

    },
    
    validateEmail: function(input)
    {
        var emailField = document.getElementById("emailfield");
            
        if (emailField.lastChild.hasChildNodes()) // Tar bort eventuellt utskrivet felmeddelande
        {
            emailField.lastChild.remove(emailField.lastChild);
        }

        if (input.value.trim() == "")
        {
            var emptyErrorMessage = document.createTextNode("Detta fält får inte lämnas blankt."); // Själva felmeddelandet för för- och efternamn
            var emptyErrorTag = document.createElement("p"); // P-taggen som texten ska stoppas i
            emptyErrorTag.appendChild(emptyErrorMessage);
            emailField.appendChild(emptyErrorTag);
            Validator.email = false;
        }
        
        else
        {
            input.value = input.value.trim();
            if (input.value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i))
            {
                Validator.email = true;
            }
            
            else
            {
                emailField = document.getElementById("emailfield");
            
                    if (emailField.lastChild.hasChildNodes()) // Tar bort eventuellt utskrivet felmeddelande
                    {
                        emailField.lastChild.remove(emailField.lastChild);
                    }

                    var incorrectFormatMessage = document.createTextNode("Ogiltigt E-post");
                    var incorrectFormatTag = document.createElement("p");
                    incorrectFormatTag.appendChild(incorrectFormatMessage);
                    emailField.appendChild(incorrectFormatTag);
                    Validator.email = false;
            }
        }

    }

}


window.onload = function(){
    
    var form = document.getElementById("myForm");
    
  
    // Kontroll när användaren lämnar förnamn-fältet
    var firstNameInput = document.getElementById("firstname");
    firstNameInput.onblur = function ()
    {
        Validator.validateFirstName(firstNameInput);
    }
    
    
    // Kontroll när användaren lämnar efternamn-fältet
    var lastNameInput = document.getElementById("lastname");
    lastNameInput.onblur = function ()
    {
        Validator.validateLastName(lastNameInput);
    }

    // Kontroll när användaren lämnar postnummer-fält
    var postalCodeInput = document.getElementById("postalcode");
    postalCodeInput.onblur = function ()
    {
        Validator.validatePostalCode(postalCodeInput);    
    }
    
    // Kontroll när användare lämnar email-fält
    var emailInput = document.getElementById("email");
    emailInput.onblur = function ()
    {
        Validator.validateEmail(emailInput);
    }
    
    
    form.onsubmit = function(e){
        console.log(Validator.firstName, Validator.lastName, Validator.postalCode, Validator.email);
        if (!Validator.firstName || !Validator.lastName || !Validator.postalCode || !Validator.email)
        {
            return false;
        }
        
        else
        {
            var background = document.createElement("div");
            background.id = "background";
            var container = document.getElementById("container");
            container.appendChild(background);
        }
        
    }
    
}