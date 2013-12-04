"use strict";

window.onload = function(){


	    var birthday = function(date){
        
        var bdim = new Date(Date.parse(date));    
        var nowdate = new Date();
        nowdate.setHours(0);
        nowdate.setMinutes(0);
        nowdate.setSeconds(0);
        nowdate.setMilliseconds(0);
        bdim.setHours(0);
        bdim.setMinutes(0);
        bdim.setSeconds(0);
        bdim.setMilliseconds(0);

        
        var y = date[0] + date[1] + date[2] + date[3]; 
        var m = date[5] + date[6];
        var d = date[8] + date[9];

            if (isNaN(d))
            {
                throw new Error("Felaktigt datum!");       
            }
            
            if (bdim > nowdate)
	        {
	            throw new Error("Födelsedagen måste vara tidigare än dagens datum.");
	        }

        
        var nowyear = nowdate.getFullYear();
	    
	    var birthdatethisyear = new Date(nowyear,m-1,d);
	   
	    console.log(birthdatethisyear);
	    var birthdateinmilli = birthdatethisyear.getTime();
	    
	    var difference = nowdate - birthdateinmilli;
	    
	    var seconds = difference / 1000;
	    var minutes = seconds / 60;
	    var hours = minutes / 60;
	    var days = hours / 24;
	    
	    days = days -(days % 1);
	    console.log(days);
	    
    	    if (difference > 0)
    	    {
    	        var nextbirthdate = new Date(nowyear+1, m-1, d);
    	        var nextbirthinmilli = nextbirthdate.getTime();
    	        
    	        var newdifference = nextbirthinmilli - nowdate;
    	        
    	        var dseconds = newdifference / 1000;
    	        var dminutes = dseconds / 60;
    	        var dhours = dminutes / 60;
    	        var ddays = dhours / 24;
                
                    if (ddays % 1 !=0)
                    {
                        ddays = ddays - (ddays % 1)
                    }
                
                return ddays;	    
    	    }
    	    
    	    else
    	    {
    	        days = 0 - days;
    	        if (days % 1 !=0)
                    {
                        days = days - (days % 1)
                    }
    
    	        return days;
    	    }
	    

			// Din kod här.




	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};