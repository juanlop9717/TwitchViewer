/* $(document).ready(function(){

	var url = ["https://api.twitch.tv/kraken/streams/mang0","https://api.twitch.tv/kraken/streams/lffn","https://api.twitch.tv/kraken/streams/hungrybox","https://api.twitch.tv/kraken/streams/armadaugs","https://api.twitch.tv/kraken/streams/mew2king"];

	var url2 = ["https://api.twitch.tv/kraken/streams/mang0?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/lffn?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/hungrybox?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/armadaugs?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/mew2king?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/freecodecamp?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg"

	]

	
	var names  = [];
		
	
		$.ajax({
		type: "GET",
		url: url[1],
		headers:{
			'Client-ID' : "uwk818nie9dcsovbc5ov2w5xa4dpbg"
		},
		success: function(data1){

		if(data1.stream === null){
			$("#status").html("OFFLINE")
		}
		else{
			$("#status").html("ONLINE")
		}
		}
	
	});
	var url5 = "https://api.twitch.tv/kraken/channels/mang0?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg";
	var url3 = "https://api.twitch.tv/kraken/users/mang0/follows/channels?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg";
	$.getJSON(url5, function(data2){
		for(i = 0;i<names.length;i++){
			var url12  = "https://api.twitch.tv/kraken/streams/"+ names[i] + "?/callback=?"
		
		$.getJSON(url12).done(function(data3){
			var logo;
			var name; 
			var status;

		})
	  }

	  	for (var i = 0; i < 6; i++) {
	  	var onlineUrl = "https://api.twitch.tv/kraken/streams/"+names[i]+"?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg";
	  	$.getJSON(url5 , function(data){
	  		 console.log(data2);
	  		if(data.stream === null){

	  			$("#row").append('<div class="col xl6" id="user">'+ data.display_name +'</div>	<div class="col xl6" id="0"></div>');
	  			
	  		}

	  	});
	  

	  	}



	}) */

	var url4 = "https://api.twitch.tv/kraken/streams/freecodecamp?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg";



	$(document).ready(function(){
		var url = ['https://api.twitch.tv/kraken/streams/freecodecamp?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
		"https://api.twitch.tv/kraken/streams/lffn?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/hungrybox?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/armadaugs?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",
	"https://api.twitch.tv/kraken/streams/mew2king?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg",'https://api.twitch.tv/kraken/streams/mang0?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
	"https://api.twitch.tv/kraken/streams/playhearthstone?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg"];
	var online = [];
	var offline = [];
		for (var i = 0; i < url.length; i++) {
		
			
			var url2 = ['https://api.twitch.tv/kraken/channels/freecodecamp?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
			'https://api.twitch.tv/kraken/channels/lffn?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
			'https://api.twitch.tv/kraken/channels/hungrybox?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
			'https://api.twitch.tv/kraken/channels/armadaugs?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
			'https://api.twitch.tv/kraken/channels/mew2king?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
			'https://api.twitch.tv/kraken/channels/mang0?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg',
			'https://api.twitch.tv/kraken/channels/playhearthstone?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg'
			
			];
			function lacra(){
				$.getJSON(url2[i], function(data2){


				var name = data2.name;
				url = "https://api.twitch.tv/kraken/streams/"+ name +"?client_id=uwk818nie9dcsovbc5ov2w5xa4dpbg";
				$.getJSON(url,function(data){
					console.log(data2.logo)
					
					if(data.stream === null){
						$("#cd").append('<a target="_blank" class="white-text offline " href="'+ data2.url +'"><div class="card center-align animated bounceIn blue darken-2"><img src="'+ data2.logo +'"class="image"></img> <span class="username"> ' +  data2.display_name + '</span> <span class="status">OFFLINE</span> </div> </div></a>').show(1000);
						offline.push('<a target="_blank" class="white-text offline" href="'+ data2.url +'"><div class="card center-align animated bounceIn blue darken-2"><img src="'+ data2.logo +'"class="image"></img> <span class="username"> ' +  data2.display_name + '</span> <span class="status">OFFLINE</span> </div> </div></a>');

					}
					else{

						$("#cd").append('<a target="_blank" class="white-text online" href="'+ data2.url +'"><div class="card center-align animated bounceIn"><img src="'+ data2.logo +'"class="image"></img> <span class="username"> ' +  data2.display_name + '</span> <span class="status">ONLINE</span><span>'+ data2.game +'</span></div></div></a>').show(1000);
						online.push('<a target="_blank" class="white-text offline" href="'+ data2.url +'"><div class="card center-align animated bounceIn"><img src="'+ data2.logo +'"class="image"></img> <span class="username"> ' +  data2.display_name + '</span> <span class="status">ONLINE</span><span>'+ data2.game +'</span> </div> </div></a>');
					}

							


					

					setTimeout(function(){
						$("div.card").removeClass("bounceIn");
					}, 3000)
				});	

			});

			}

			lacra();
			
			}

			$("#all").click(function(){
							$("#cd").empty();
							for (var i = 0; i < offline.length+ online.length; i++) {
								$("#cd").append(offline[i]);
								$("#cd").append(online[i]);
							}
							
				
				
					});


					$("#online").click(function(){
						console.log(online);
						$("#cd").empty();
						for (var i = 0; i < offline.length+ online.length; i++) {
								$("#cd").append(online[i]);
								console.log(online);
							}
					});
					$("#offline").click(function(){
						$("#cd").empty();
						for (var i = 0; i < offline.length+ online.length; i++) {
								$("#cd").append(offline[i]);
							}
						});

	})






	/*console.log(names.lenght);
	for(var i = 0 ; i<names.length;i++){
		console.log(i);
	}*/
	




	/* 	$.ajax(
		{
			type: "GET", url: url, 
			async: false, 
			dataType: "json",
			success: function(data){
				$("#output").html('')
				for(var i = 0; i< data[1].length;i++ ){
				$("#output").append('<a class="animated fadeInUp" href="'+data[3][i]+'" target="_blank"><li class="info-cont card hvr-grow"> 	<p class="title" id="title" style="color: black">' + data[1] [i] + '	</p> <p id="content" style="color: red">' + data[2] [i] + '	</p> </li></a>');

				}
			}, 
			error: function(errorMessage){
				alert("Error");
			}		
		})
*/

//})

