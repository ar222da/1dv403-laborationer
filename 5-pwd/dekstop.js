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
        
        var topBar = document.createElement("div");
        topBar.id = "topbar";
        borderBackground.appendChild(topBar);
    
        var gallery = document.createElement("div");
        gallery.id = "gallery";
        borderBackground.appendChild(gallery);
        
        
        var bottomBar = document.createElement("div");
        bottomBar.id = "bottombar";
        borderBackground.appendChild(bottomBar);
        
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
        
        //setTimeout(function() 
        //{
            var bottomBarLoading = document.getElementById("bottombar");
            var text = document.createElement("p");
            text.id = "text";
            text.innerHTML = "Laddar..."
            bottomBarLoading.appendChild(text);
        //}, 100);
        
        xhr.onreadystatechange = function()
        {
        
            if (xhr.readyState === 4)
            {
                var bottomBarLoading = document.getElementById("bottombar");
                    
                    var text = document.getElementById("text");
                    text.remove();
                
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
                    
                        for (x = 0; x < obj.length; x++)
                        {
                            var box = document.createElement("div");
                            box.value = obj[x].URL;
                            
                            box.onclick = function() 
                                {
                                    Desktop.changeWallpaper(this.value);
                                }

                            box.id = x;
                            box.style.width = maxThumbWidth + 20 + "px";
                            box.style.height = maxThumbHeight + 20 + "px";
                            box.style.backgroundColor = "#9999FF";
                            box.style['border-radius'] = "5px";
                            box.style['margin-left'] = "10px";
                            box.style['margin-top'] = "10px";
                            box.style['float'] = "left";
                            var thumbWidth = obj[x].thumbWidth;
                            var thumbHeight = obj[x].thumbHeight;
                            var marginWidth = (((maxThumbWidth + 20) - thumbWidth) / 2);
                            var marginHeight = (((maxThumbHeight + 20) - thumbHeight) / 2);
                            //gallery.insertBefore(box, gallery.lastChild);
                            gallery.appendChild(box);
                            var image = document.createElement("img");
                            image.src = obj[x].thumbURL;
                            image.style['margin-left'] = marginWidth + "px";
                            image.style['margin-top'] = marginHeight + "px";
                            box.appendChild(image);
                            gallery.insertBefore(box, gallery.lastChild);
                        }
                
                    borderBackground.style.width = ((maxThumbWidth + 20) * 3) + 30 + 10 + 6 + "px";
                    gallery.style.width = ((maxThumbWidth + 20) * 3) + 30 + 10 + "px";
                    topBar.style.width = ((maxThumbWidth + 20) * 3) + 30 + 10 + "px";
                    bottomBar.style.width = ((maxThumbWidth + 20) * 3) + 30 + 10 + "px";
                    
                    if (borderBackground.scrollHeight > borderBackground.clientHeight)
                    {
                        borderBackground.style.width = ((maxThumbWidth + 20) * 3) + 47 + 10 + 6 + "px";
                        gallery.style.width = ((maxThumbWidth + 20) * 3) + 47 + 10 + "px";
                        topBar.style.width = ((maxThumbWidth + 20) * 3) + 47 + 10 + "px";
                        bottomBar.style.width = ((maxThumbWidth + 20) * 3) + 47 + 10 + "px";
                        gallery.style['overflow-y'] = "scroll";
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
    
    changeWallpaper: function(url)
    {
        var container = document.getElementById("container");
        container.style['background'] = "url('" + url + "')";
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