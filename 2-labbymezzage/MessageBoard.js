var MessageBoard = {
    
    messages: [],

    init:function(e)
    {
        
    }

}

function showDate (dateButton) {
    var messageID = dateButton.getAttribute("id");
    var indexID = messageID.slice(4);
        
        alert(MessageBoard.messages[indexID].getDateText());
    
    renderMessages();
}

function removeMessage(removeButton) {
    var messageID = removeButton.getAttribute("id");
    var indexID = messageID.slice(6);
    var conf = confirm("Vill du verkligen radera meddelandet?");
        
        if (conf == true)
        {
            MessageBoard.messages.splice(indexID, 1);
        }
    
    renderMessages();
}

function renderMessage(messageID)
{
    var deletebutton = document.createElement("div");
        
        deletebutton.id = "delete" + messageID;
        deletebutton.className = "delete";
        
    
    var datebutton = document.createElement("div");
    
        datebutton.id = "date" + messageID;
        datebutton.className = "date";
    
    var timefield = document.createElement("div");
        timefield.id = "time";
    
    var time = document.createTextNode(MessageBoard.messages[messageID].getDateText().slice(46));
        timefield.appendChild(time);
        
    var list = document.createElement("li");
    var text = document.createElement("p");
        
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        list.appendChild(text);
        list.appendChild(datebutton);
        list.appendChild(deletebutton);
        list.appendChild(timefield);
        document.getElementById("messages").appendChild(list);
}

function renderMessages()
{
    document.getElementById("messages").innerHTML = "";
    
        for (var i=0; i<MessageBoard.messages.length; i++)
        {
            renderMessage(i);    
            document.getElementById("delete" + i).onclick = function(){
                removeMessage(this);
            }
        
            document.getElementById("date" + i).onclick = function(){
                showDate(this);
            }
        
        }
        
    document.getElementById("messagecounter").innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
}

function newMessage(){
    var message = new Message();
    
        message.setText(document.getElementById("text").value);
        message.setDate(new Date());
        //console.log(message.getText());
    
    MessageBoard.messages.push(message);
    renderMessages();
}    
    
    

window.onload = function (){
    document.getElementById("messagecounter").innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
    document.getElementById("messagebutton").onclick = newMessage;
    
    document.getElementById("text").onkeypress = function (e){
        
        if(!e) {
            e =window.event;
        }
        
        var bokstav = e.keyCode;

        if (bokstav == 13 && e.shiftKey == false)
        {
            newMessage();
        }
          
    }
    
      
}

