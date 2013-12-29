"use strict";
var Memory = {
    
    memoryarray: [],
    rows: 4,
    columns: 4,
    arraycheck: [],
    arraycheckid: [],
    imagesshown: 0,
    
    turns: 0,
    
    init: function(e)
    {
        this.memoryarray = RandomGenerator.getPictureArray(this.rows,this.columns);
    },
    
    getPictures: function()
    {
        return this.memoryarray;
    },
    
    hej: function(id)
    {
          var image = document.getElementById(id);
         
        if (Memory.imagesshown < 2) 
        {
            image.src = "pics/" + Memory.memoryarray[id] + ".png";
            Memory.imagesshown++;
         
           
            setTimeout(function(){image.src = "pics/0.png", Memory.imagesshown--}, 1000);
  
            Memory.arraycheck.push(Memory.memoryarray[id]);
            Memory.arraycheckid.push(id);
            var lastelement = Memory.arraycheck.length - 1;
            
    
                if ((Memory.arraycheck[lastelement] == Memory.arraycheck[lastelement-1]) && (Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1]))
                {
                    alert("Grattis!");
                    var i = Memory.arraycheckid[lastelement];
                    var ib = Memory.arraycheckid[lastelement-1];
                    var image1 = document.getElementById(i);
                    image1.setAttribute("src", "pics/" + Memory.memoryarray[Memory.arraycheckid[lastelement]] + ".png")
                    image1.value = -1;
                    
                    var image2 = document.getElementById(ib);
                    image2.setAttribute("src", "pics/" + Memory.memoryarray[Memory.arraycheckid[lastelement]] + ".png")
                    image2.value = -1;
                    
                    console.log(Memory.arraycheckid[lastelement]);
                    console.log(Memory.arraycheckid[lastelement-1]);
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
                        image = document.createElement("img");
                        image.src = "pics/0.png";
                        image.id = boxcounter;
                      
                        image.onclick= function ()
                        {
                            console.log(Memory.memoryarray);
                           
                            if (this.value != -1)
                            {
                                Memory.hej(this.id);
                            }
                        }
                        
                        box.appendChild(image);
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