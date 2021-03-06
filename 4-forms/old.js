var emptyErrorMessage = document.createTextNode("Detta fält får inte lämnas blankt."); // Själva felmeddelandet för för- och efternamn
        var emptyErrorTag = document.createElement("p"); // P-taggen som texten ska stoppas i
        emptyErrorTag.appendChild(emptyErrorMessage); // Texten stoppas i p-taggen 
        
        var firstName = document.getElementById("firstnamefield").lastChild; // Används vid den följande kontrollen 
        
            if (firstName.hasChildNodes()) // Kolla om ett felmeddelande redan skrivits ut vid förnamn-fältet, ta bort i så fall
            {
                firstName.remove(firstName.lastChild);
            }

        var lastName = document.getElementById("lastnamefield").lastChild; // Används vid den följande kontrollen
            
            if (lastName.hasChildNodes()) // Kolla om ett felmeddelande redan skrivits ut vid efternamn-fältet, ta bort i så fall
            {
                lastName.remove(lastName.lastChild);
            }
        
        var postalCode = document.getElementById("postalcodefield").lastChild;
            
            if (postalCode.hasChildNodes()) // Kolla om ett felmeddelande redan skrivits ut vid postnummer-fältet, ta bort i så fall
            {
                postalCode.remove(postalCode.lastChild);
            }
            
        var email = document.getElementById("emailfield").lastChild;
            
            if (email.hasChildNodes()) // Kolla om ett felmeddelande redan skrivits ut vid email-fältet, ta bort i så fall
            {
                email.remove(email.lastChild);
            }
        

        if (form.elements["firstname"].value.trim() == "") // Kontrollera att fältet är ifyllt
        {
            var firstNameField = document.getElementById("firstnamefield"); // Li-elementet som innehåller input-fältet
            firstNameField.appendChild(emptyErrorTag); // Sätt till felmeddelandet bredvid input-fältet, alltså ett nytt barn i form av tidigare skapad p-tagg tillfogas li-elementet
            return false;
        }

        if (form.elements["lastname"].value.trim() == "") // Samma princip som ovan fast för efternamnet
        {
            var lastNameField = document.getElementById("lastnamefield"); 
            lastNameField.appendChild(emptyErrorTag);
            return false;
        }
        
        if (form.elements["postalcode"].value.trim() == "")
        {
            var postalCodeField = document.getElementById("postalcodefield");
            postalCodeField.appendChild(emptyErrorTag);
            return false;
        }
        
        if (form.elements["email"].value.trim() == "")
        {
            var emailField = document.getElementById("emailfield");
            emailField.appendChild(emptyErrorTag);
            return false;
        }
