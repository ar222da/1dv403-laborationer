"use strict";
var Memory = {
    
    memoryarray: [],
    rows: 4,
    columns: 4,
    arraycheck: [],
    arraycheckid: [],
    imagesshown: 0,
    foundpairs: 0,
    
    turns: 0,
    
    init: function(e)
    {
        this.memoryarray = RandomGenerator.getPictureArray(this.rows,this.columns);
    },
    
    getPictures: function()
    {
        return this.memoryarray;
    },
    
    showPicture: function(id)
    {
        
        console.log(Memory.memoryarray);
        console.log(Memory.turns);
        Memory.arraycheck.push (Memory.memoryarray[id]);
        Memory.arraycheckid.push(id);
        var lastelement = Memory.arraycheckid.length-1;
   
        if (Memory.imagesshown == 0 || Memory.imagesshown == 1)
        {
            var box = document.getElementById(id);
            box.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
                
            if (id != Memory.arraycheckid[lastelement-1] || Memory.imagesshown == 0)
            {
                Memory.imagesshown++;
            }
            
                if ((Memory.arraycheck[lastelement] == Memory.arraycheck[lastelement-1]) && (Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1]))
                {
                    var foundbox = document.getElementById(Memory.arraycheckid[lastelement]);
                    var foundboxb = document.getElementById(Memory.arraycheckid[lastelement-1]);
                    foundbox.firstChild.src = "pics/" + Memory.arraycheck[lastelement] + ".png";
                    foundbox.value = -1;
                    foundboxb.firstChild.src = "pics/" + Memory.arraycheck[lastelement] + ".png";
                    foundboxb.value = -1;
                    Memory.imagesshown = 0;
                    Memory.foundpairs++;
                    //alert(foundbox.value + " " + foundboxb.value);
                    
                        if (Memory.foundpairs == Memory.memoryarray.length / 2)
                        {
                            alert("Grattis! Du klarade det på " + Memory.turns + " försök.");
                           
                        }
                }

            
        
            else 
            {
                if (box.firstChild.value != -1)
                {
                setTimeout(function()
                {
                    box.firstChild.src = "pics/0.png";
                    
                    if (Memory.imagesshown > 0)
                    {
                        Memory.imagesshown--; 
                    }
                    
                }, 1000);
                }
            }       
            
        
        }
        
        
        
  
    },
    
    drawPictures: function()
    {
        var content = document.getElementById("container");
        var row;
        var box;
        var boxcounter = 0;
        var image;
        
        for (var y=0; y < this.rows; y++)
        {
            row = document.createElement("div");
            row.className = "row";
            
                for (var x=0; x < this.columns; x++)
                {
                    
                    box = document.createElement("a");
                    box.id = boxcounter;
                    box.value = 0;    
                    image = document.createElement("img");
                    image.src = "pics/0.png";
                    box.appendChild(image);
                    
                    box.onclick= function ()
                    {
                        if (this.value ==0)
                        {
                            console.log(this.value);
                            Memory.turns++;
                            Memory.showPicture(this.id);
                        }
                    }
                    
                    row.appendChild(box);
                    boxcounter++;
               
                }
            
            content.appendChild(row);
           
        }
        
       
    }
    
}

window.onload = function(){
    Memory.init();
    //console.log(Memory.getPictures());
    Memory.drawPictures();
}