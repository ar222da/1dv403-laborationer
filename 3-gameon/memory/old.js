        
        
        /*var lastelement = Memory.arraycheck.length-1;
    
            if (id != Memory.arraycheckid[lastelement] && Memory.imagesshown < 2)
            {
                Memory.arraycheck.push(Memory.memoryarray[id]);
                Memory.arraycheckid.push(id);
                console.log(Memory.arraycheck);
                console.log(Memory.arraycheckid);
                box.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
                Memory.imagesshown++;
                setTimeout(function(){box.firstChild.src = "pics/0.png";Memory.imagesshown--;}, 1000);
               
            
            }
        
        */
        
        
        
        //var lastelement = Memory.arraycheck.length-1;
        //console.log(Memory.arraycheckid[lastelement-1]);
        //console.log(Memory.arraycheckid[lastelement]);
        
        //box.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
       
        
        /*
        Memory.arraycheck.push(Memory.memoryarray[id]);
        Memory.arraycheckid.push(id);
        var lastelement = Memory.arraycheck.length-1;
        
       
        if ((Memory.arraycheck.length == 1) || (Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1]))
        {
            Memory.imagesshown++;
        }
        
        console.log(Memory.imagesshown);
        
        if (Memory.imagesshown < 3)
        {
            var image = document.getElementById(id);
            image.src = "pics/" + Memory.memoryarray[id] + ".png";
            setTimeout(function(){image.src = "pics/0.png"; 
                if (Memory.imagesshown > 0)
                {
                    Memory.imagesshown--;
                }
            }, 1000);
        }
        
        */
        
        /*
        console.log("början av funktion: " + Memory.imagesshown);
          
        if (Memory.imagesshown < 2) 
        {
            var image = document.getElementById(id);
            image.src = "pics/" + Memory.memoryarray[id] + ".png";
            console.log("en bit in: " + Memory.imagesshown);
            
            Memory.arraycheck.push(Memory.memoryarray[id]);
            Memory.arraycheckid.push(id);
            
            var lastelement = Memory.arraycheck.length - 1;
            
            if (Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1])
            {
                Memory.imagesshown++;
            }
            
                if ((Memory.arraycheck[lastelement] == Memory.arraycheck[lastelement-1]) && (Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1]))
                {
                    alert("Grattis!");
                    var i = Memory.arraycheckid[lastelement];
                    var ib = Memory.arraycheckid[lastelement-1];
                    //var image1 = document.getElementById(i);
                    image.setAttribute("src", "pics/" + Memory.memoryarray[Memory.arraycheckid[lastelement]] + ".png")
                    image.value = -1;
                    
                    var image2 = document.getElementById(ib);
                    image2.setAttribute("src", "pics/" + Memory.memoryarray[Memory.arraycheckid[lastelement]] + ".png")
                    image2.value = -1;
                    
                    Memory.imagesshown = 0;
                    console.log(Memory.imagesshown);
                }
                
                else
                {
                    setTimeout(function(){
                    image.src = "pics/0.png";
                    
                    if (Memory.imagesshown > 0)
                    {
                        Memory.imagesshown--;
                    }   
                    
                    }, 1000);
    
                }
            
        }
        */
