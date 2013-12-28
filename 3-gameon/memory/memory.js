"use strict";
var Memory = {
    
    memoryarray: [],
    rows: 4,
    columns: 4,
    arraycheck: [],
    arraycheckid: [],
    checkcounter: 0,
    imagesshown: 0,
    first: 0,
    firstid: 0,
    second: 0,
    secondid: 0,
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
        //var image = document.getElementById(id);
        
        //Memory.arraycheck[Memory.checkcounter] = Memory.memoryarray[id];
        //Memory.arraycheckid[Memory.checkcounter] = id;
        
        Memory.arraycheck.push(Memory.memoryarray[id]);
        Memory.arraycheckid.push(id);
        var lastelement = Memory.arraycheck.length - 1;
        
        
        
            if (Memory.arraycheck[lastelement] == Memory.arraycheck[lastelement-1] && Memory.arraycheckid[lastelement] != Memory.arraycheckid[lastelement-1])
            {
                
            }
        
        
  
        if (Memory.imagesshown < 2)
        {
            if (Memory.imagesshown == 0)
            {
                Memory.first = Memory.memoryarray[id];
                Memory.firstid = id;
                console.log("First" + Memory.first);
            }
        
            if (Memory.imagesshown == 1)
            {
                Memory.second = Memory.memoryarray[id];
                Memory.secondid = id;
                console.log("Second" + Memory.second);
            }
            
            
            var image = document.getElementById(id);
            image.src = "pics/" + Memory.memoryarray[id] + ".png";
            Memory.imagesshown++;
        
            setTimeout(function(){image.src = "pics/0.png"; 
            
            if (Memory.first == Memory.second && Memory.firstid != Memory.secondid)
            {
                alert("Grattis!");
            }

            
            
            Memory.imagesshown--}, 1000);
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
                        Memory.hej(this.id);
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