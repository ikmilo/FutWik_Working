
	function iniCar() {

		
	var imgPrim = $('#ruca .selt');
		imgPrim.fadeOut(300);
		imgPrim.removeClass('selt');

		var idImgPrim = imgPrim.attr("id");
		idImgPrim = idImgPrim.substr(-1);
		idImgPrim = parseInt(idImgPrim);
		

		if (idImgPrim == $(".g4").length){
		 idImgPrim = 0;
		}
		console.log(idImgPrim);

		var proxImg = "#item-"+(idImgPrim + 1);
		console.log(proxImg);
		$(proxImg).fadeIn(300);
		$(proxImg).addClass('selt');	
		
		}
		

$(document).ready(function(){

	

	$('#historia').hover(function(){

		$('#historia-menu').slideDown(300);
	});

	var menuTime;
	
	$('#historia-menu').mouseleave(function(){

		if($('#historia-menu').css("display") != 'none')
    	{

    		menuTime = setTimeout(function(){
    			$('#historia-menu').slideUp(500);}, 1500);

    	}
	});


	$('#jugadas').hover(function(){

		$('#jugadas-menu').slideDown(300);
	});

	var menuTime;
	
	$('#jugadas-menu').mouseleave(function(){

		if($('#jugadas-menu').css("display") != 'none')
    	{

    		menuTime = setTimeout(function(){
    			$('#jugadas-menu').slideUp(500);}, 2500);

    	}
	});

		$('#entrenadores').hover(function(){

		$('#dt-menu').slideDown(300);
	});

	var menuTime;
	
	$('#dt-menu').mouseleave(function(){

		if($('#dt-menu').css("display") != 'none')
    	{

    		menuTime = setTimeout(function(){
    			$('#dt-menu').slideUp(500);}, 2500);

    	}
	});















	setInterval(function(){
		$("#let").toggleClass("KO");
	}, 100);

	var carousel = setInterval(iniCar, 3000);

	$('.track').click(function(){

		$(this).toggleClass('allwin');

	});

});



