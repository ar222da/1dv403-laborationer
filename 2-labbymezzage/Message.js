function Message(message, date){
    
    this.getText = function (){
        return message;
    }
    
    this.setText = function (_text){
        message = _text;
    }
    
    this.getDate = function(){
        return date;
    }
    
    this.setDate = function(_date){
        date = _date;
    }
    
    Message.prototype.toString = function(){
        return this.getText() +" (" + this.getDate() + ") ";
    }
    
    Message.prototype.getHTMLText = function(){
        this.message = this.getText();
        return this.message.replace(/[\n\r]/g, "<br/>");
    }
    
    Message.prototype.getDateText = function(){
     
    this.date = this.getDate();
    var month;
    
        switch(this.date.getMonth())
        {
            case 0: month = "januari";
                    break;
            
            case 1: month = "februari";
                    break;
            
            case 2: month = "mars";
                    break;
            
            case 3: month = "april";
                    break;
            
            case 4: month = "maj";
                    break;
            
            case 5: month = "juni";
                    break;
            
            case 6: month = "juli";
                    break;
            
            case 7: month = "augusti";
                    break;
            
            case 8: month = "september";
                    break;
            
            case 9: month = "oktober";
                    break;
            
            case 10: month = "november";
                    break;
                
            case 11: month = "december";
                    break;
            
        }
        
        if (this.date.getHours() < 10)
        {
            var hours = "0" + this.date.getHours();
        }
        
        else
        {
            hours = this.date.getHours();
        }
        
        if (this.date.getMinutes() < 10) 
        {
            var minutes = "0" + this.date.getMinutes();
        }
        
        else
        {
            minutes = this.date.getMinutes();
        }
        
        if (this.date.getSeconds() < 10)
        {
            var seconds = "0" + this.date.getSeconds();
        }
        
        else
        {
            seconds = this.date.getSeconds();
        }
        
            
        return "Inlägget skapades den " + this.date.getDate() + " " + month + " " + this.date.getFullYear() + " klockan " + hours + ":" + minutes + ":" + seconds;
        
    }

}

