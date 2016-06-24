var socket = io(server);
function formSubmit (){
        var data = $("form").serialize().split("&");
            var obj={};
            for(var key in data)
            {
                obj[data[key].split("=")[0]] = decodeURIComponent(data[key].split("=")[1]);
            }
            if (obj.email && obj.message && obj.name){
              socket.emit('emailData',obj);
              $('#alert').fadeIn();
              setTimeout(function() {
                   $('#alert').fadeOut('fast');
               }, 3000);

            }
            else {
              $('#alert-bad').fadeIn();
              setTimeout(function() {
                   $('#alert-bad').fadeOut('fast');
               }, 3000);
            }
}