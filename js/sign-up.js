$(document).ready(function(){
	$("#submit").click(function(){
		var signemail = $("input#email").val();
		
		if (signemail =='') { alert("Wpisz adres emailowy"); }
		else if ( !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(signemail)  ) {alert("Nieprawidlowy adres email"); }
		else {
		$.ajax({
		type: "POST",
		url: "http://www.digityo.com/pg-chocznia/ajax-submit.php",
		data: { 
               signemail: signemail    
                },
                cache: false,	
 				success: function(result) {				
                    if (result == "success") { 	alert("Twój email został zarejestrowany."); }
					else { alert(result);	}		
                    //clear all fields
                    $('#signup').trigger("reset");				
                }
        }); 
		return false;
		}

	});
});
