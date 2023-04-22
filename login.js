function SendToXano() {
		event.preventDefault();
		const xano_input = 
    {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
        // You can add other inputs here if you want
    };
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:6ckdF9pq/auth/login", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(xano_input),
        })
				// handle response
        .then(res => res.json())
        .then(json => {
        	const xanoResponse = json;
        	console.log(xanoResponse);
        	const hasKey = Object.keys(xanoResponse).includes("authToken");
          console.log(hasKey);
          if (hasKey === false) {
          	console.log("Invalid username or password.")}
            else {
            	console.log("We have an authToken!");
              const authToken = xanoResponse.authToken;
              localStorage.setItem('authToken', authToken);
              location.href = "/myaccount";
              };}
        );
}

document.getElementById("login").addEventListener("click", SendToXano);

