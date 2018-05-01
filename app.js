$(document).ready(function(){
	typeString("Matthew Beerens Web Development", $("#hero h1"));
});

$("#about-link").on("click",(function(e){
	e.preventDefault();
	window.scrollTo({
    	top: $("#about").position().top,
    	behavior: "smooth"
	});
}));

$("#portfolio-link").on("click",(function(e){
	e.preventDefault();
	window.scrollTo({
    	top: $("#portfolio").position().top,
    	behavior: "smooth"
	});
}));

$("#contact-link").on("click",(function(e){
	e.preventDefault();
	window.scrollTo({
    	top: $("#contact").position().top,
    	behavior: "smooth"
	});
}));

$("#heading h1").on("click",(function(){
	e.preventDefault();
	window.scrollTo({
    	top: $('header').position().top,
    	behavior: "smooth"
	});
}));

function typeString(string, element) {
	element.text("");
	var str = string.split("");
	var index = 0;
	var done = false;

	setInterval(function(){
		if(index < string.length){
			element.text(element.text()+str[index]);
			index +=1;
		}
		if(!done && index == string.length){
			done = true;
			element.append("<span id='US'>_</span>");

			var us = $("#US");
			window.setInterval(function(){
				if(us.css("opacity") == 1){
					us.css("opacity", "0");
				} else {
					us.css("opacity", "1");
				}
			}, 500);
		}
	}, 50);
}



