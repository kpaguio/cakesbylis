function setCookie(cname, cvalue, exdays) {
	// cname is the cookie name
	// cvalue is the value the cookie
	// exdays is the length of how long the cookie will last before expiring
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	// returns the cookie with that name
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) 
	{
		let c = ca[i];
		while (c.charAt(0) == ' ') 
		{
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) 
		{
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() 
{
	//Checks if cookie exists
	let confirm = getCookie("ToSConfirmation");
	if (confirm == "") 	
	{
		document.getElementById("ToSModalLink").click();
	}
}
function ToSAccept()
{
	// Creates a cookie for ToS that lasts for 1 days
	setCookie("ToSConfirmation", true , 1);
	document.location.reload();
}

function deleteAllCookies() {
	// for testing purposes, deletes ToS cookie
    var cookies = document.cookie;
    //console.log(cookies);
    document.cookie = "ToSConfirmation=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    cookies = document.cookie;
	// console.log(cookies);
}
// Checks if ToS is accepted or not
checkCookie();

// Uncomment below to test ToS
// deleteAllCookies();
