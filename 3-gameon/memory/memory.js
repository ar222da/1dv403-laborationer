"use strict";
var Memory = {
    
    memoryarray: [],
    rows: 4,
    columns: 4,
    arraycheck: [],
    arraycheckid: [],
    imagesshown: 0,
    //lastelement: null,
    
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
        Memory.arraycheckid.push(id);
        
        if (Memory.imagesshown ==0 || Memory.imagesshown == 1)
        {
            var box = document.getElementById(id);
            box.firstChild.src = "pics/" + Memory.memoryarray[id] + ".png";
            var lastelement = Memory.arraycheckid.length-1;
                
                if (id != Memory.arraycheckid[lastelement-1] || Memory.imagesshown == 0)
                {
                    Memory.imagesshown++;
                    console.log(Memory.imagesshown);
                }
            
            setTimeout(function(){box.firstChild.src = "pics/0.png";
            if (Memory.imagesshown >0)
            {Memory.imagesshown--; console.log(Memory.imagesshown);
            }}, 1000);
       
        }       
        
        
        
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
                    //box.innerHTML = boxcounter;
                   
                    image = document.createElement("img");
                    image.src = "pics/0.png";
                    image.value = 0;
                    //image.id = boxcounter;
                    box.appendChild(image);
                    
                        box.onclick= function ()
                        {
                            //console.log(Memory.memoryarray);
                           
                            //if (this.value != -1)
                            //{
                                Memory.showPicture(this.id);
                            //}
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