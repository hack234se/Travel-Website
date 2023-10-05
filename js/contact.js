$(document).ready(function() {

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#contactUsForm").submit( event => {
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var flag = true;
		$("#name").next().text("");
		if (name == "") 
		{
			$("#name").next().text("Name is required.");
			flag = false;
		}
		$("#name").val(name.trim());
		$("#email").next().text("");
		$("#email").next().text("");
		if (email == "") 
		{
			$("#email").next().text("Email is required.");
			flag = false;
		}
		else if (!(emailPattern.test(email.trim())))
		{
			$("#email").next().text("Must be a valid email address.");
			flag = false;
		}
		$("#email").val(email.trim());
		
		$("#message").next().text("");
		if (message == "") 
		{
			$("#message").next().text("Message is required.");
			flag = false;
		}
		$("#message").val(message.trim());
		
		if(flag == false)
		{
			event.preventDefault();
		}	
	});
});
