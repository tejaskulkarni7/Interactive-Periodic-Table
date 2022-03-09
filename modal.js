 function displayModal(element)
      {
      var modal = document.getElementById("myModal");
         document.getElementById("p1").innerHTML = element;
         modal.style.display = "block";
      }

	  
	  var modal = document.getElementById("myModal");

	  
	  var btn = document.getElementById("myBtn");

	  
	  var span = document.getElementsByClassName("close1")[0];

	  
	  
	  span.onclick = function() {
	    modal.style.display = "none";
	  }

	  
	  window.onclick = function(event) {
	    if (event.target == modal) {
	      modal.style.display = "none";
	    }
	  }