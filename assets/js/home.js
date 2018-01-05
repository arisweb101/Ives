$('body').on('click', '#signin-bt, #create-account-bt', function(){
	$('.logo, .welcome, .createAccount, #signin-bt').hide();
});

$(document).on('show.bs.modal','#signin, #create-account-bt', function (event) {

 $('body').on('click','#signin .close', function(){
	$('.logo, .welcome, .createAccount, #signin-bt').show();
	});
})

$(document).on("hidden.bs.modal", function () {
  $('.logo, .welcome, .createAccount, #signin-bt').show();
  });