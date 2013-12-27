"use strict";
var Memory = {
    
    memoryarray: [],
      
    init: function(e)
    {
        this.memoryarray = RandomGenerator.getPictureArray(4,6);
    },
    
    getPictures: function()
    {
        return this.memoryarray;
    },
    
    drawPictures: function()
    {
        var cont = document.getElementById("container");
        var box;
        var row = document.createElement("div");
        row.className = "row";
        var rowcounter = 0;
        row.id = rowcounter;
            
        for (var x=1; x=this.memoryarray.length; x++)
        {
            
            if (x % (this.memoryarray.length/4) == 0)
            {
                cont.appendChild(row);
                rowcounter++;
                row = document.createElement("div");
            }
            
            box = document.createElement("p");
            box.id = x;
            box.innerHTML=this.memoryarray[x];
            row.className = "row";
            row.id = rowcounter;
            row.appendChild(box);
        }
        
        cont.appendChild(row);
    }
    
}

window.onload = function(){
    Memory.init();
    console.log(Memory.getPictures());
    Memory.drawPictures();
}