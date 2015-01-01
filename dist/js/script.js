$(document).ready(function(){ 

	$('#registrationForm').on('submit', function(ev) {

		// prevent from auto-submitting  
		ev.preventDefault();
		ev.stopPropagation();

		sendData();
	});


	var sendData = function() { 

		var name = $('#name').val();
		var email = $('#Email').val();

		var dataString = "name=" + name + "&email=" + email;

		alert (dataString);return false; 	//uncomment to display the data that will be sent to the php script on button click

		$.ajax({
			type: "post",
			url: "http://www.plugzee.com/dist/php/insert.php",
			data: dataString,
			success: function() {
				$('#registrationForm').hide();
				$('#changingText').text("Thank you for subscribing " + name +  "!");
			},
			error: function(xhr, textStatus, error){
				  console.log(xhr.statusText);
				  console.log(textStatus);
				  console.log(error);
			}
		});
		
		return;
	}

});
