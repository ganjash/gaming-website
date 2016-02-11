function secondaction_2(){
	// alert("hiii");
			
				// $.get("?query=usa",true)
			
			 // alert("hiiii");
			// var url = "/static/polls/images/"
				var xhttp = new XMLHttpRequest();
				  xhttp.onreadystatechange = function() {
				    if (xhttp.readyState == 4 && xhttp.status == 200) {
				        //alert(xhttp.responseText);
				    	var res= $.parseJSON(xhttp.responseText);
				    	 //alert(res);
				       	$("#div01").append($("#"+res[0]));
				       	$("#div02").append($("#"+res[1]));
				       	$("#div03").append($("#"+res[2]));
				       	$("#div04").append($("#"+res[3]));
	                    // $("#div0"+(res.f[0]).toString()).append($("#res.f[0]"));
	                     // $("#div0"+(res.c[0]).toString()).append($("#res.c[0]"));
	                     // $("#div0"+(res.a[0]).toString()).append($("#res.a[0]"));
	                     $("#action2").html("Next Round");
	                     $("#action2").attr({"onclick": "phase2_func_2("+0+")"});
			        
				    }
				  }
				  xhttp.open("GET", "?query="+$("div p").get(0).id, true);
				  xhttp.send();
				  
				}

function phase2_func_2(r){
	$.get("","result="+r,function(data,status,xhr){
         window.location.replace("http://localhost:8000/game/play");
	})
	
}


function firstaction_2(query){

	if($("#div01").children().length+$("#div02").children().length+$("#div03").children().length+$("#div04").children().length < 4){
alert("Match all the options");
 }
else{
	var img;
	var url = "/static/polls/images/"
	img=[$("#div01 img")[0].id,$("#div02 img")[0].id,$("#div03 img")[0].id,$("#div04 img")[0].id];
	var csrftoken = getCookie('csrftoken');
	$.ajaxSetup({
	    beforeSend: function(xhr, settings) {
	        if (sameOrigin(settings.url)) {
	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
	            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	        }
	    }
	});
	
	$.post("","query="+$("div p").get(0).id, function(data, status , xhr){
	        //alert("Data: " + xhr.responseText + "\nStatus: " + status);
		    var res= $.parseJSON(xhr.responseText);
		    var win = 1;
        	 if(img[0] == res[0]){
        		 $("#result1").attr({"src":"/static/polls/images/right.png",
        			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 
        	     
        	 }
        	 else{
        		 win = 0;
        		 $("#result1").attr({"src":"/static/polls/images/wrong.png",
        			                  "style":"visibility:visible ; width: 40px; height: 40px;;"});
        	 }
        	 if(img[1] == res[1]){
        		 $("#result2").attr({"src":"/static/polls/images/right.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 else{
        		 win = 0;
        		 $("#result2").attr({"src":"/static/polls/images/wrong.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;;"});
             }
        	 if(img[2] == res[2]){
        		 $("#result3").attr({"src":"/static/polls/images/right.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 else{
        		 win = 0;
        		 $("#result3").attr({"src":"/static/polls/images/wrong.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 if(img[3] == res[3]){
        		 $("#result4").attr({"src":"/static/polls/images/right.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 else{
        		 win = 0;
        		 $("#result4").attr({"src":"/static/polls/images/wrong.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 var obj2 = JSON.parse(sessionStorage['artifacts']);
			 //alert($("div p").get(0).id);
        	 obj2[$("div p").get(0).id]=1;
			 sessionStorage.setItem('artifacts',JSON.stringify(obj2));
			 sessionStorage['countp2'] = parseInt(sessionStorage['countp2']) + 1;
	         
        	 
        	 if(win == 1){
        		 $("#action1").html("NextRound");
        		 var temp = parseInt(sessionStorage['countp22']);
        		 temp += 1;
        		 sessionStorage['countp22'] =  temp;
        		 if(temp ==4){
        			 $("#1209").trigger('click');
        		 }
                 $("#action1").attr({"onclick":"phase2_func_2("+1+")"});
                 
	    	 }
        	 else{
        		 $("#action1").html("Show Answers");
        		 $("#action1").attr({"id":"action2",
		                "onclick":"secondaction_2()"});
	
        	 }
        			
        			
        
            
    });

			
 }
}



function secondaction(){
	// alert("hiii");
			
				// $.get("?query=usa",true)
			
			 // alert("hiiii");
			// var url = "/static/polls/images/"
				var xhttp = new XMLHttpRequest();
				  xhttp.onreadystatechange = function() {
				    if (xhttp.readyState == 4 && xhttp.status == 200) {
				      // alert(xhttp.responseText);
				    	var res= $.parseJSON(xhttp.responseText);
				    	// alert(res.m[0]);
				       	$("#div01").append($("#"+res.m[0]));
				       	$("#div02").append($("#"+res.f[0]));
				       	$("#div03").append($("#"+res.c[0]));
				       	$("#div04").append($("#"+res.a[0]));
	                    // $("#div0"+(res.f[0]).toString()).append($("#res.f[0]"));
	                     // $("#div0"+(res.c[0]).toString()).append($("#res.c[0]"));
	                     // $("#div0"+(res.a[0]).toString()).append($("#res.a[0]"));
	                     $("#action2").html("Next Round");
	                     $("#action2").attr({"onclick": "phase2_func()"});
			             
				    }
				  }
				  xhttp.open("GET", "?query="+$("#div01").parent().get(0).id, true);
				  xhttp.send();
				  
				}

function phase2_func(){
	$.get("","phase2=monument",function(data,status,xhr){
		 window.location.replace("http://localhost:8000/game/play");
	})
	
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}


function firstaction(query){

	if($("#div01").children().length+$("#div02").children().length+$("#div03").children().length+$("#div04").children().length < 4){
alert("Match all the options");
 }
else{
	//alert("inside firstaction");
	var img;
	var url = "/static/polls/images/"
	img=[$("#div01 img")[0].id,$("#div02 img")[0].id,$("#div03 img")[0].id,$("#div04 img")[0].id];
	var csrftoken = getCookie('csrftoken');
	//alert(""+$("#div01").parent().get(0).id);
	$.ajaxSetup({
	    beforeSend: function(xhr, settings) {
	        if (sameOrigin(settings.url)) {
	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
	            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	        }
	    }
	});
	
	$.post("","query="+$("#div01").parent().get(0).id, function(data, status , xhr){
	        //alert("Data: " + xhr.responseText + "\nStatus: " + status);
		    var res= $.parseJSON(xhr.responseText);
		    var win = 1;
		    //alert('inside evaluation.');
        	 if(img[0] == res.m[0]){
        		 $("#result"+res.m[0]).attr({"src":"/static/polls/images/right.png",
        			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 
        		 var temp = JSON.parse(sessionStorage['stat']);
        		 temp[0] += 1;
        		 sessionStorage.setItem('stat',JSON.stringify(temp));
        	 }
        	 else{
        		 win = 0;
        		 $("#result"+res.m[0]).attr({"src":"/static/polls/images/wrong.png",
        			                  "style":"visibility:visible ; width: 40px; height: 40px;;"});
        	 }
        	 if(img[1] == res.f[0]){
        		 $("#result"+res.f[0]).attr({"src":"/static/polls/images/right.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 
        		 var temp = JSON.parse(sessionStorage['stat']);
        		 temp[1] += 1;
        		 sessionStorage.setItem('stat',JSON.stringify(temp));
        	 
        	 }
        	 else{
        		 win = 0;
        		 $("#result"+res.f[0]).attr({"src":"/static/polls/images/wrong.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;;"});
             }
        	 if(img[2] == res.c[0]){
        		 $("#result"+res.c[0]).attr({"src":"/static/polls/images/right.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 
        		 var temp = JSON.parse(sessionStorage['stat']);
        		 temp[2] += 1;
        		 sessionStorage.setItem('stat',JSON.stringify(temp));
        	 
        	 }
        	 else{
        		 win = 0;
        		 $("#result"+res.c[0]).attr({"src":"/static/polls/images/wrong.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 if(img[3] == res.a[0]){
        		 $("#result"+res.a[0]).attr({"src":"/static/polls/images/right.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 
        		 var temp = JSON.parse(sessionStorage['stat']);
        		 temp[3] += 1;
        		 sessionStorage.setItem('stat',JSON.stringify(temp));
        	 
        	 }
        	 else{
        		 win = 0;
        		 $("#result"+res.a[0]).attr({"src":"/static/polls/images/wrong.png",
	                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
        	 }
        	 var obj1 = JSON.parse(sessionStorage['country']);
			 obj1[$("#div01").parent().get(0).id]=1;
			 sessionStorage.setItem('country',JSON.stringify(obj1));
			 sessionStorage['countp1'] = parseInt(sessionStorage['countp1']) + 1;
			  
			 
        	 if(win == 1){
        		 $("#action1").html("NextRound");
        		 $("#1209").trigger('click');
                 $("#action1").attr({"onclick":"phase2_func()"});
                 
	
        		 
        	 }
        	 else{
        		 $("#action1").html("Show Answers");
        		 $("#action1").attr({"id":"action2",
		                "onclick":"secondaction()"});
	
        	 }
        			
        			
        
            
    });

			
 }
}



$(document).ready(function(){
	//alert('hiiiiii');
    if(sessionStorage.getItem('country')== null){
    	var obj1 = {'usa': -1,'canada': -1,'uk': -1,'france': -1,'italy': -1,'egypt': -1,'russia': -1,'china': -1,'india': -1,'aust':-1};
    	sessionStorage.setItem('country', JSON.stringify(obj1)) ;
    	var obj2 = {'monument': -1,'flag': -1,'currency': -1,'animal': -1};
    	sessionStorage.setItem('artifacts', JSON.stringify(obj2)) ;    	
    	sessionStorage.setItem('countp1',0);
    	sessionStorage.setItem('countp2',0);
    	sessionStorage.setItem('countp22',0);
    	var stat = [0,0,0,0];
    	sessionStorage.setItem('stat', JSON.stringify(stat));
    	//alert(sessionStorage.getItem('country'));
    }
    
	$('#actionx').click(function(){
		window.location.assign("http://localhost:8000/game/play");
	});
	
	$('#actiony').click(function(){
		
		var csrftoken = getCookie('csrftoken');
		//alert(""+$("#div01").parent().get(0).id);
		$.ajaxSetup({
		    beforeSend: function(xhr, settings) {
		        if (sameOrigin(settings.url)) {
		            xhr.setRequestHeader("X-CSRFToken", csrftoken);
		            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		        }
		    }
		});
		
		$.ajax({
			  type: 'POST',
			  url: "",
			  data: "query="+sessionStorage['stat'],
			  async:false
			});
		
			window.location.assign("http://localhost:8000/game/stats");
	});
	
	$('#actionz').click(function(){
		window.location.assign("http://localhost:8000/game/help");
	});
	
	
	
	
	$("#1234").click(function(){
		//sessionStorage.name="Hi harsha. I am session 2";
		//alert(sessionStorage.getItem("name"));
		//alert(sessionStorage.length);
		//$("#1209").trigger('click');
	});
	
	 $("#p1").find("button").click(function(event){
		 //alert(""+sessionStorage['countp1'])
		 var obj1 = JSON.parse(sessionStorage['country']);
		 var count = JSON.parse(sessionStorage['countp1']);
		 
		 if(count >= 10){
			 alert("You have completed Phase1. Please proceed to Phase2.");
			 return;
		 }
		 if(obj1[event.target.id]> 0){
			 alert("You already played this level, Play other levels");
		 }
		 else{
			  window.location.assign("http://localhost:8000/game/phase1?country="+event.target.id);	 
		 }
		 
		 //$.get("http://localhost:8000/game/phase1","country="+ event.target.id[0]);
		 //alert(event.target.id);
	     //alert(obj1[event.target.id]);	 
	 
	 });
	
	 $("#p2").find("button").click(function(event){
         var count = JSON.parse(sessionStorage['countp1']);
		 if(count < 10){
			 alert("You haven't completed Phase1. Please complete it first.");
			 return;
		 }
		 var obj2 = JSON.parse(sessionStorage['artifacts']);
		 var count = JSON.parse(sessionStorage['countp2']);
		 
		 if(count >= 4){
			 alert("You have completed all Levels. Well done.");
			 return;
		 }
		 if(obj2[event.target.id]> 0){
			 alert("You already played this level, Play other levels");
		 }
		 else{
			  window.location.assign("http://localhost:8000/game/phase2?artifacts="+event.target.id);	 
		 }
	 });
	
	 
	/*$("#1234").click(
			function(){
				var csrftoken = getCookie('csrftoken');
				// alert(""+csrftoken);
				$.ajaxSetup({
					// alert("inside ajax setup");
				    beforeSend: function(xhr, settings) {
				        if (sameOrigin(settings.url)) {
				            xhr.setRequestHeader("X-CSRFToken", csrftoken);
				            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				        }
				    }
				});
				$.post("","query=usa", function(data, status , xhr){
				        alert("Data: " + xhr.responseText + "\nStatus: " + status);
					    var res= $.parseJSON(xhr.responseText);
					    // alert(" m :"+res['m'][0]);
				    });
				}); 
*/	
	
	/*
	$("#action1").click(
		function(){
			if($("#div01").children().length+$("#div02").children().length+$("#div03").children().length+$("#div04").children().length < 4){
	    alert("Match all the options");
         }
		else{
			var img;
			var url = "/static/polls/images/"
			img=[$("#div01 img")[0].id,$("#div02 img")[0].id,$("#div03 img")[0].id,$("#div04 img")[0].id];
			var csrftoken = getCookie('csrftoken');
			$.ajaxSetup({
			    beforeSend: function(xhr, settings) {
			        if (sameOrigin(settings.url)) {
			            xhr.setRequestHeader("X-CSRFToken", csrftoken);
			            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			        }
			    }
			});
			$.post("","query=usa", function(data, status , xhr){
			        //alert("Data: " + xhr.responseText + "\nStatus: " + status);
				    var res= $.parseJSON(xhr.responseText);
				    var win = 1;
		        	 if(img[0] == res.m[0]){
		        		 $("#result1").attr({"src":"/static/polls/images/right.png",
		        			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 
		        	     
		        	 }
		        	 else{
		        		 win = 0;
		        		 $("#result1").attr({"src":"/static/polls/images/wrong.png",
		        			                  "style":"visibility:visible ; width: 40px; height: 40px;;"});
		        	 }
		        	 if(img[1] == res.f[0]){
		        		 $("#result2").attr({"src":"/static/polls/images/right.png",
			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
		        	 }
		        	 else{
		        		 win = 0;
		        		 $("#result2").attr({"src":"/static/polls/images/wrong.png",
			                  "style":"visibility:visible ; width: 40px; height: 40px;;"});
                     }
		        	 if(img[2] == res.c[0]){
		        		 $("#result3").attr({"src":"/static/polls/images/right.png",
			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
		        	 }
		        	 else{
		        		 win = 0;
		        		 $("#result3").attr({"src":"/static/polls/images/wrong.png",
			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
		        	 }
		        	 if(img[3] == res.a[0]){
		        		 $("#result4").attr({"src":"/static/polls/images/right.png",
			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
		        	 }
		        	 else{
		        		 win = 0;
		        		 $("#result4").attr({"src":"/static/polls/images/wrong.png",
			                  "style":"visibility:visible ; width: 40px; height: 40px;"});	 	    	 
		        	 }
		        	 if(win == 1){
		        		 $("#1209").trigger('click');
		        		 $("#action1").html("NextRound");
			
		        		 
		        	 }
		        	 else{
		        		 $("#action1").html("Show Answers");
		        	 }
		        			$("#action1").attr({"id":"action2",
		        				                "onclick":"secondaction()"});
		        			
		        			
		        
		            
		    });

					
		 }
	   });	*/

});

