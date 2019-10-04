var pictures = [
	{
		"title":"A Cottage",
		"description":"A little cottage.",
		"url":"img/image1.jpg"
	},
	{
		"title":"A Horse",
		"description":"A horse eating hay.",
		"url":"img/image2.jpg"
	},
	{
		"title":"Lake",
		"description":"Water flowing down lake.",
		"url":"img/image3.jpg"
	},
	{
		"title":"Peacock",
		"description":"A peacock standing outside.",
		"url":"img/image4.jpg"
	},
	{
		"title":"The Guy",
		"description":"The guy.",
		"url":"img/image5.jpg"
	}
];

$(document).ready(function(){
	var count = 0;
	$(pictures).each(function(){
		var img = $(document.createElement("img"));
		$(img).attr({
			"src":this.url,
			"data-index":count,
			"title":this.title,
			"alt":this.description
		});
		$(img).appendTo("figure");
		var thumb = $(img).clone().appendTo("nav");
		$(thumb).bind("click",function(){
			$("figure img").each(function(){
				$(this).addClass("hidden");
			});
			$('figure img[data-index="'+this.getAttribute("data-index")+'"]').removeClass("hidden");
			$('h3').html(this.getAttribute("title"));
			$('figcaption').html(this.getAttribute("alt"));
		});
		count++;
	});
});
