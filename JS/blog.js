$(document).ready(function(){
	$(".down").on("click", function(){
		var sectionName =$(this).attr("href");
		console.log(sectionName);

		var sectionPlacement = $(sectionName).offset().top;
		console.log(sectionPlacement);

		$("html, body").animate({scrollTop: sectionPlacement}, 2000);

		return false;
	});



});