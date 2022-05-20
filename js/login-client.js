var firebaseConfig = {
		apiKey: "AIzaSyCoaEAxSCPdZCSNtmfN-dyFbAMxidaa3-8",
		authDomain: "se2project-9167c.firebaseapp.com",
		databaseURL: "https://se2project-9167c-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "se2project-9167c",
		storageBucket: "se2project-9167c.appspot.com",
		messagingSenderId: "64666107569",
		appId: "1:64666107569:web:aadfae0d0676b668b42c90"

		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		const auth =  firebase.auth();
		

		function signUp(){
		    var email = document.getElementById("email1");
		    var password = document.getElementById("password1");
		    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
		    promise.catch(e=>alert(e.message));
		    //alert("SignUp Successfully");

		  }

		  //signIN function
		  function  signIn(){
		    var email = document.getElementById("email");
		    var password  = document.getElementById("password");
		    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
		    promise.catch(e=>alert(e.message));
		    

		    
		  }


		  //signOut

		  function signOut(){
		    auth.signOut();
		    document.getElementById("email").value = '';
			document.getElementById("password").value = '';
		    alert("SignOut Successfully from System");
		  }

		  //active user to homepage
		  firebase.auth().onAuthStateChanged((user)=>{
			  
			var email1 = user.email;
			if(email1 == 'admin@cakesbylis.com'){
				  alert("Active user "+email1);
				  window.location.href="listoforders.html";

				  
			}
			if(email1 == 'staffone@cakesbylis.com' || email1 == 'stafftwo@cakesbylis.com' ){
				  alert("Active user "+email1);
				  window.location.href="inventory.html";
				      
			    }
			    //else{
			    	//alert("No Active user Found")
				      
			    //}
			  })
		    if(user){
		      var email = user.email;
		      alert("Active user "+email);

		    //}else{
		      //alert("No Active user Found")
		    }
