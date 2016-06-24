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
               var $toastContent = $('<span>Success! Thank you for you Submission!</span>');
  				Materialize.toast($toastContent, 5000);

            }
            else {
              $('#alert-bad').fadeIn();
               var $toastContent = $('<span>Did you fill in all the details?</span>');
  				Materialize.toast($toastContent, 5000);
            }
}