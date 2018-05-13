

for (var i =  0; i < 30; i++) {

var html = "<div style='background:#cecece;margin:10%;height:100px;' id='"+i+"'><div class='welcome front "+i+" '><div id='progress"+i+"' data-dimension='20' data-text='' data-fontsize='36' data-percent='100' data-fgcolor='#30B455' data-bgcolor='#eee' data-width='15' data-bordersize='15' data-animationstep='1'></div>FRONT "+i+"</div><div class='welcome back "+i+" hidden'>BACK "+i+"</div></div>"
$("#main").append(html)


}

var flags = new Array(30).fill(0);
var list = [];
var last_flipped = -1;

function flip(temp) {
	$($("#"+temp).children()[0]).toggleClass("hidden")
	$($("#"+temp).children()[1]).toggleClass("hidden")
}

$(window).scroll(function(){

	console.log("onscroll")
	for(var i = 0; i < 30; i++){
		var hT = $("#"+i).offset().top,
		hH = $("#"+i).outerHeight(),
		wH = window.innerHeight,
		wS = $(this).scrollTop();
		//console.log(wS+" "+hT+" "+hH+" "+wH)
		if(wS > (hT+hH-wH)){
			if(flags[i]==0){			
				flags[i]=1
				console.log("inside "+flags[i]+" "+i)
				list.push(i)
				$('#progress'+i).circliful();
				/*
				if(list.length>5){
					list=list.slice(Math.max(list.length - 5, 1))
				}*/
				setTimeout(
					function(){

						var new_card = list[last_flipped+1]
						console.log(list)
						console.log("last flipped = "+last_flipped+" ; flipping new_card = "+new_card+" with a delay = "+(Math.abs((list.length-1)-last_flipped))*1000)
						flip(new_card);
						last_flipped++
					}
					//,(Math.abs((list.length-1)-last_flipped))*500
					,1800
				)

			}
			
		}
	}

})

