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

		$.ajax({
			type: "post",
			url: "/dist/php/insert.php",
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
