"use strict";
var Memory = {
    
    memoryarray: [],
    rows: 4,
    columns: 2,
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
        Memory.imagesshown++;
        var image = document.getElementById(id);
        image.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
        Memory.arraycheck.push(Memory.memoryarray[id]);
        Memory.arraycheckid.push(id);
        
        var lastelement = Memory.arraycheck.length-1;
   
        if ((Memory.imagesshown ==2 && Memory.arraycheck.length > 1) && (Memory.arraycheck[lastelement] == Memory.arraycheck[lastelement-1]) && (Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1]))
        {
            image.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
            image.value = 1;
            
            var prior = document.getElementById([Memory.arraycheckid[lastelement-1]]);
            prior.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
            prior.value = 1;
            Memory.imagesshown = 0;
            Memory.foundpairs++;
            Memory.turns++;
            console.log(Memory.imagesshown);
        }
        
        if (Memory.foundpairs == Memory.memoryarray.length / 2)
        {
            var text = document.createElement("p");
            text.innerHTML = "Grattis! Du klarade det på " + Memory.turns + " försök.";
            var cont = document.getElementById("content");
            cont.appendChild(text);
        }
        
        else
        {
            if (Memory.imagesshown == 2)
            {
                Memory.turns++;
                setTimeout(function()
                    {
                        if (image.value == 0)
                        {
                            image.firstChild.src = "pics/0.png";
                            var imagebefore = document.getElementById(Memory.arraycheckid[Memory.arraycheckid.length-2]);
                            imagebefore.firstChild.src = "pics/0.png";
                            Memory.imagesshown = Memory.imagesshown -2;
                        }
                        
                        else
                        {
                            image.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";    
                        }
                        
                    }, 1000);
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
                    box.href="#";
                    box.id = boxcounter;
                    box.value = 0;    
                    image = document.createElement("img");
                    image.src = "pics/0.png";
                   
                    box.appendChild(image);
                  
                        box.onclick= function ()
                        {
                            if (Memory.imagesshown < 2 && this.value == 0)   
                            {                  
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
    Memory.drawPictures();
}