"use strict";

var Desktop = {
    open: false,
    
    init: function()
    {
        var icon = document.getElementById("content");
        icon.onclick = function()
        {
            if (!Desktop.open)
            {
                Desktop.openGallery();
                Desktop.open = true;
            }
        }
    },
    
    openGallery: function()
    {
        var borderBackground = document.createElement("div");
        borderBackground.id = "borderbackground";
        
        var gallery = document.createElement("div");
        gallery.id = "gallery";
        borderBackground.appendChild(gallery);
        
        var topBar = document.createElement("div");
        topBar.id = "topbar";
        gallery.appendChild(topBar);
        
        var bottomBar = document.createElement("div");
        bottomBar.id = "bottombar";
        gallery.appendChild(bottomBar);
        
        var windowIcon = document.createElement("div");
        windowIcon.id = "windowicon";
        topBar.appendChild(windowIcon);
        
        var windowText = document.createTextNode("Image Viewer");
        var paragraph= document.createElement("p");
        paragraph.appendChild(windowText);
        topBar.appendChild(paragraph);
        
        var closeIcon = document.createElement("div");
        closeIcon.id = "closeicon";
        topBar.appendChild(closeIcon);
        
        closeIcon.onclick = function ()
        {
            Desktop.closeGallery();
        }
        
        document.body.appendChild(borderBackground);
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4)
            {
                if (xhr.status >=200 && xhr.status < 300 || xhr.status === 304)
                {
                    var obj = JSON.parse(xhr.responseText);
                    
                    var thumbWidthArray = [];
                    var thumbHeightArray = [];
                    
                        for (var x = 0; x < obj.length; x++)
                        {
                            thumbWidthArray[x] = obj[x].thumbWidth;
                            thumbHeightArray[x] = obj[x].thumbHeight;
                        }
                        
                    thumbWidthArray.sort(function (a,b){return b-a});
                    thumbHeightArray.sort(function (a,b){return b-a});

                    var maxThumbWidth = thumbWidthArray[0];
                    var maxThumbHeight = thumbHeightArray[0];
                    console.log(maxThumbWidth);
                    
                    borderBackground.style.width = ((maxThumbWidth + 20) * 4) + 40 + 10 + 6 + "px";
                    gallery.style.width = ((maxThumbWidth + 20) * 4) + 40 + 10 + "px";
                    topBar.style.width = ((maxThumbWidth + 20) * 4) + 40 + 10 + "px";
                    bottomBar.style.width = ((maxThumbWidth + 20) * 4) + 40 + 10 + "px";

                    
                        for (x = 0; x < obj.length; x++)
                        {
                    
                            var box = document.createElement("div");
                            box.id = x;
                            box.style.width = maxThumbWidth + 20 + "px";
                            box.style.height = maxThumbHeight + 20 + "px";
                            box.style.backgroundColor = "#ff5667";
                            box.style['border-radius'] = "5px";
                            box.style['margin-left'] = "10px";
                            box.style['margin-top'] = "10px";
                            box.style['float'] = "left";
                            var thumbWidth = obj[x].thumbWidth;
                            var thumbHeight = obj[x].thumbHeight;
                            var marginWidth = (((maxThumbWidth + 20) - thumbWidth) / 2);
                            var marginHeight = (((maxThumbHeight + 20) - thumbHeight) / 2);
                            gallery.insertBefore(box, gallery.lastChild);
                            var image = document.createElement("img");
                            image.src = obj[x].thumbURL;
                            image.style['margin-left'] = marginWidth + "px";
                            image.style['margin-top'] = marginHeight + "px";
                            box.appendChild(image);
                            gallery.insertBefore(box, gallery.lastChild);
                        }
                }
                
                else
                {
                    console.log("Läsfel");
                }
            }
        }
        
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
    },
    
    closeGallery: function()
    {
        var gallery = document.getElementById("borderbackground");
        gallery.remove();
        Desktop.open = false;
    }
    
    
    
    
}

window.onload = function() {
    Desktop.init();
}