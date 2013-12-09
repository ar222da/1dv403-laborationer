"use strict";

var makePerson = function(persArr) {
    
    var NumberOfObjects = persArr.length;
    var Names = new Array();                    // Array för namn
    var Ages = new Array();                     // Array för åldrar
    
        for (var i=0; i<NumberOfObjects; i++)   // Hämta namn och åldrar
        {                                       // från objektet och sätt in
            var ob = persArr[i];                // respektive array
            Names[i] = ob["name"];
            Ages[i] = ob["age"];
        }
    
    var SortedNames = Names.sort(               // Sortera namnen och använder
        (function(a,b)                          // localecompare för
        {                                       // browserns lokala språk-
            return a.localeCompare(b)           // inställningar så att
        }));                                    // hänsyn tas till Å Ä Ö

    var str = "";
    
        for (i=0; i<NumberOfObjects; i++)       // Lägger till kommatecken
        {                                       // och mellanslag i den
            str += SortedNames[i];              // sorterade namnarrayen
                                                // så att dessa hamnar mellan 
                if (i < (NumberOfObjects-1))    // varje namn förutom efter
                {                               // det sista namnet.
                    str += ", ";
                }
        }
    
    var SortedAges = Ages.sort();               // Sortera åldrarna.
   
    var LowestAge = SortedAges[0];              // Den lägsta åldern hamnar
                                                // först i ålderarrayen
                                                
    var HighestAge = SortedAges[NumberOfObjects-1];
                                                // Den högsta ålderna hamnar
                                                // sist i ålderarrayen
    var sum = 0;
    
        for (i=0; i<NumberOfObjects; i++)       // Räkna ut summan av alla 
        {                                       // åldrar.
            sum = sum + SortedAges[i];
        }
        
    var AverageAge = Math.round(sum / NumberOfObjects); // Medelvärdet av
                                                        // alla åldrar.
    
    var result =                                // Skapar ett objekt
    {                                           // som ska returneras.
        minAge: LowestAge,
        maxAge: HighestAge,
        averageAge: AverageAge,
        names: str
        
    };

    return result;                              // Returnera
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
	// Din kod här...



