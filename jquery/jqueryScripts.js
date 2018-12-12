$(document).ready(function() {
	

	$('#userAgeGet').focusout(function() {
		if($("#userAgeGet").val()>100||$("#userAgeGet").val()<1||isNaN($("#userAgeGet").val())){
			alert("wrong age input");
			$('#userAgeGet').addClass('error');
			$('#getButt').attr("disabled", "disabled");;
		}
		else{
			$('#userAgeGet').removeClass('error');
			$('#getButt').removeAttr("disabled");
		}
	});
	
	$('#userAgePost').focusout(function() {
		if($("#userAgePost").val()>100||$("#userAgePost").val()<1||isNaN($("#userAgePost").val())){
			alert("wrong age input");
			$('#userAgePost').addClass('error');
			$('#postButt').attr("disabled", "disabled");;
		}
		else{
			$('#userAgePost').removeClass('error');
			$('#postButt').removeAttr("disabled");
		}
	});
	
	$('#getButt').bind('click', function() {	
		$.ajax({
			type:  'GET',
			contentType: 'application/json',
			url: 'http://localhost:3001/userGet?userName='+$('#userNameGet').val()+'&userAge='+$('#userAgeGet').val()+'&userAddress='+$('#userAddressGet').val(),
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
				$('#getResult').html(JSON.stringify(data));
			}
		});
	});

	$('#postButt').bind('click', function() {
		var fields = {
				userName:$('#userNamePost').val(),
				userAge:$('#userAgePost').val(),
				userAddress:$('#userAddressPost').val(),
		};
		
		$.ajax({
			type:  'POST',
			data:  JSON.stringify(fields),
			contentType: 'application/json',
			url: 'http://localhost:3001/userPost',
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
				$('#postResult').html(JSON.stringify(data));
			}
		});
	});

});


