"use strict";
var Memory = {
    
    memoryarray: [],
    rows: 4,
    columns: 4,
    
    init: function(e)
    {
        this.memoryarray = RandomGenerator.getPictureArray(this.rows,this.columns);
    },
    
    getPictures: function()
    {
        return this.memoryarray;
    },
    
    hej: function()
    {
        alert("Hej!");
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
                    box.value = Memory.memoryarray[boxcounter];
                    image = document.createElement("img");
                    image.src = "pics/0.png";
                    image.id = boxcounter;
                    
                    image.onclick= function (){
                        this.src = "pics/" + this.parentNode.value + ".png";
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
    console.log(Memory.getPictures());
    Memory.drawPictures();
}