var MessageBoard = {
    
    messages: [],
    
    init:function(e)
    {
        
    }
}

window.onload = function (){
    
    var mess = new Message("Meddelande 1", new Date());
    var mess2 = new Message("Meddelande 2", new Date());
    var mess3 = new Message("Meddelande 3", new Date());
    MessageBoard.messages[0] = mess;
    MessageBoard.messages[1] = mess2;
    alert(MessageBoard.messages[0].getText());
    MessageBoard.messages.push(mess3);
    alert(MessageBoard.messages[2].getText());
    
}

