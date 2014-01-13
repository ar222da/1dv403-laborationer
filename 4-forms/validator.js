"use strict";
var Validator = {
    
    fields: ["Förnamn: ", "Efternamn: ", "Postnummer: ", "E-post: ", "Prismodell: "],
    
    firstName: false,
    lastName: false,
    postalCode: false,
    email: false,
    
    submitter: false,
    
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

    },
    
    confirm: function()
    {
        
        var formular = document.getElementById("myForm");
        formular.style['opacity'] = "0.3";
        var inputs = document.getElementsByTagName('input');
        
            for (var x = 0; x < inputs.length; x++)
            {
                inputs[x].disabled = true;
            }
        
        var container = document.getElementById("container");
        var modalPopup = document.createElement("div");
        modalPopup.id = "modal";
        var confirmHeader = document.createElement("h2");
        var confirmHeaderText = document.createTextNode("Vänligen bekräfta ditt köp");
        confirmHeader.appendChild(confirmHeaderText);
        modalPopup.appendChild(confirmHeader);
        var unsortedListElement = document.createElement("ul");
        
            for (var x = 0; x < Validator.fields.length; x++)
            {
                var text = document.createTextNode(Validator.fields[x]);
                var paragraph = document.createElement("p");
                paragraph.className = "confirmfont";
                paragraph.appendChild(text);
                var paragraphB = document.createElement("p");
                paragraphB.className = "confirmfontB";
                var textB = document.createTextNode(formular.elements[x].value);
                paragraphB.appendChild(textB);
                var listElement = document.createElement("li");
                listElement.appendChild(paragraph);
                listElement.appendChild(paragraphB);
                unsortedListElement.appendChild(listElement);
            }
            
        modalPopup.appendChild(unsortedListElement);
        var confirm = document.createElement("BUTTON");
        confirm.className = "submitb";
        var textConfirm = document.createTextNode("Bekräfta");
        confirm.appendChild(textConfirm);
        var cancel = document.createElement("BUTTON");
        cancel.className = "submitb";
        var textCancel = document.createTextNode("Avbryt");
        cancel.appendChild(textCancel);
        modalPopup.appendChild(confirm);
        modalPopup.appendChild(cancel);
        container.appendChild(modalPopup);
        
        cancel.onclick = function()
        {
            modalPopup.remove();
            formular.style['opacity'] = "1.0";
            for (var x = 0; x < inputs.length; x++)
            {
                inputs[x].disabled = false;
            }
            
            Validator.submitter = false;
        }
        
        confirm.onclick = function()
        {
            Validator.submitter = true;
            document.getElementById("myForm").submit;
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
        
        if (Validator.firstName === true && Validator.lastName === true && Validator.postalCode === true && Validator.email ===true)
        {
            Validator.confirm();
        }
        
        if (!Validator.submitter)
        {
            return false;
        }
           
        form.submit();
    }
    
 
}