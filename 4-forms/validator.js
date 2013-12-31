"use strict";
/*var Validator = {

    validate: function(form)
    {
        alert(form.elements[0]);
    }

}*/


window.onload = function(){

    var form = document.getElementById("myForm");
    var fn = form.elements["firstname"];
        fn.focus();
    form.onsubmit = function(e){
        alert(form.elements["firstname"]);
    }
    
}