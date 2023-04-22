//This code automatically calculates width for scroll wrapper
	$('.scroll').width($('.scroll-spacer').width() - 50);
  
window.onload = function() {
			if(localStorage.authToken == null){
        location.href="https://www.hyperbole.info/"}
        else
      SendToXano();
}
  
function SendToXano() { 
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:6ckdF9pq/auth/me", {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.authToken
        }
        })

        .then(res => res.json())
				.then(json => {
        	const xanoResponse = json;
        	console.log(xanoResponse);
        	document.getElementById('user').textContent = JSON.stringify(xanoResponse.name);})
}

function logout() {
  window.localStorage.removeItem('authToken');
  window.location.reload();
}

document.getElementById("logout").addEventListener("click", logout);

$(function() {
   $("li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});
