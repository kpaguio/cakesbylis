firebase.auth().onAuthStateChanged((user)=>{
			  
			    var email2 = user.email;
			    if(email2 == 'admin@cakesbylis.com'){

	}else{
		window.location.href="inventory.jsp";
	}
})