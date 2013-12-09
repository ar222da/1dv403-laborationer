"use strict";

window.onload = function(){


	    var birthday = function(date){
        
        var bdim = new Date(Date.parse(date));  // Inmatat värde som är en sträng                                      
                                                // konverteras till ett date-
                                                // objekt
        
        var nowdate = new Date();               // Nytt date-objekt (aktuellt datum)                  
        
        nowdate.setHours(0);                    // Nollställ klocan
        nowdate.setMinutes(0);                  // på dagens datum
        nowdate.setSeconds(0);
        nowdate.setMilliseconds(0);
        bdim.setHours(0);                       // och på det inmatade datumet
        bdim.setMinutes(0);                     // som har skapats som ett 
        bdim.setSeconds(0);                     // date-objekt
        bdim.setMilliseconds(0);
                                                // eftersom vi arbetar enbart med datum

        
        var y = date[0] + date[1] + date[2] + date[3];  // Hämta datumet från
        var m = date[5] + date[6];                      // STRÄNGEN som matades    
        var d = date[8] + date[9];                      // in. Födelsedag
                                                        // är ju datumbaserat!
                                                    

            if (isNaN(d))                       // Kontrollerar att 29:e Feb
            {                                   // inte matas in om
                throw new Error("Felaktigt datum!"); // det inte är skottår      
            }
            
            if (bdim > nowdate)                 // Kontrollera så att inmatat
	        {                                   // inte ligger i framtiden. 
	            throw new Error("Födelsedagen måste vara tidigare än dagens datum.");
	        }

        
        var nowyear = nowdate.getFullYear();    // Aktuellt år
	    
	    var birthdatethisyear = new Date(nowyear,m-1,d);    // Användarens födelsedag
                                                            // i det aktuella året
                                                            // som ett date-objekt
	   
	    console.log(birthdatethisyear);
	    var birthdateinmilli = birthdatethisyear.getTime(); // Födelsedagen aktuellt
	                                                        // år i milisekunder
	    
	    var difference = nowdate - birthdateinmilli;        // Antalet millisekunder
	                                                        // mellan dagens datum i m.s.
	                                                        // jämförs med födelsedagen i m.s.
	    
	    var seconds = difference / 1000;                
	    var minutes = seconds / 60;
	    var hours = minutes / 60;
	    var days = hours / 24;                              // Ovan nämnda uttryckt i antal dagar
	    
	    days = days -(days % 1);                            // Endast hela dagar är intressant.
	    console.log(days);
	    
    	    if (difference > 0)                             // Om födelsedagen redan har varit 
    	    {                                               // i aktuellt år
    	        var nextbirthdate = new Date(nowyear+1, m-1, d); // Nästa födelsedag är då efterkommande år
    	        var nextbirthinmilli = nextbirthdate.getTime();  // men månad och dag är ju samma (som nytt date-objekt)
    	        
    	        var newdifference = nextbirthinmilli - nowdate;  // Jämför då dagens datum med den kommande födelsedagen i m.s.
    	        
    	        var dseconds = newdifference / 1000;            
    	        var dminutes = dseconds / 60;
    	        var dhours = dminutes / 60;
    	        var ddays = dhours / 24;                    // Få denna skillnad uttryckt i dagar
                
                    if (ddays % 1 !=0)          
                    {
                        ddays = ddays - (ddays % 1)
                    }                                       // Endast hela dagar är intressant
                
                return ddays;	                            // Returnera detta antal dagar.
    	    }
    	    
	    else                                            // Om födelsedagen i år inte har inträffat ännu
	    {                                               // får vi negativt antal dagar.
	        days = 0 - days;                            // Konvertera till motsvarande positivt heltal     
    	        if (days % 1 !=0)
                    {
                        days = days - (days % 1)        // Endast hela dagar är intressant.
                    }
    
    	        return days;                            // Returnera detta antal dagar
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