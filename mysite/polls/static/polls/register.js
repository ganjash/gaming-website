//author sri harsha ganja
//ganjash
		function onlink(x) {
			x.style.color = "#ffcc00";
			sessionStorage.name="Hi harsha";
		}

		function offlink(x) {
			x.style.color = "black"
		}

		function allowDrop(ev) {
		    var len = ev.currentTarget.childElementCount;
		    console.log("in allowdrop", len, ev.target.id);
		   if(len <  1){
		        ev.preventDefault();
		  }
		}

		function drag(ev) {
		    ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev) {
		       var len = ev.currentTarget.childElementCount;
		   console.log("in drop " ,len, ev.target.id);
		   if(len <  1){
		        ev.preventDefault();  
		}
		   else{
		     return;
		}
		    var data = ev.dataTransfer.getData("text");
		    ev.target.appendChild(document.getElementById(data));
		}
		
			
